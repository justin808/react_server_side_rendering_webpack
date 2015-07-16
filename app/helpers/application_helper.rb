require 'execjs_renderer'

module ApplicationHelper
  def react_component(component_name, props = {})
    js_code = <<-JS
      global.renderReactComponent('#{component_name}', #{props.to_json});
    JS

    ExecJSRenderer.new.render(js_code).html_safe
  end
end
