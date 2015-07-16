class ExecJSRenderer
  def initialize
    @context = ExecJS.compile(GLOBAL_WRAPPER + bundle_js_code)
  end

  def render(js_code)
    js_code_wrapper = <<-JS
    (function () {
      var result = #{js_code}
      return result;
    })()
    JS

    @context.eval(js_code_wrapper)
  end

  private

  def bundle_js_code
    Rails.application.assets['generated/bundle.js'].to_s
  end

  GLOBAL_WRAPPER = <<-JS
    var global = global || this;
    var self = self || this;
    var window = window || this;
  JS
end
