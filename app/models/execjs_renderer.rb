class ExecJSRenderer
  # This is done so that the the js

  GLOBAL_WRAPPER = <<-JS
var _this = this;
function renderReactComponent(componentClass, props) {
  return _this.React.renderToString(
     _this.React.createElement(_this[componentClass], props)
  );
}
  JS

  def initialize
    js_code = "#{bundle_js_code}; #{GLOBAL_WRAPPER}"
    puts "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ"
    puts "js_code = #{js_code}"
    puts "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ"

    @context = ExecJS.compile(js_code)
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
    # Calling to_s to get contents of sprockets.
    Rails.application.assets['generated/bundle.js'].to_s
  end

end
