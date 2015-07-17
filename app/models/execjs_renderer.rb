class ExecJSRenderer

  # "this" does not need a closure as it refers to the "this" defined by the
  # calling the calling context which is the "this" in the execJs environment.

  # WARNING: Restart Rails if you change this CONSTANT
  JS_UTILS = <<-JS
    function renderReactComponent(componentClass, props) {
      return this.React.renderToString(
         this.React.createElement(this.HelloWorld, props)
      );
    }
  JS

  def initialize
    js_code = "#{bundle_js_code};\n#{JS_UTILS}"
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
