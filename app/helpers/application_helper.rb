require 'execjs_renderer'

module ApplicationHelper
  def react_component(component_name, props = {})
    js_expression = <<-JS
      renderReactComponent('#{component_name}', #{props.to_json})
    JS

    js_render(js_expression)
  end

  def js_context_debug
    js_render("'this is<br>' + JSON.stringify(this)")
  end

  def js_render(js_expression)
    ExecJSRenderer.new.render(js_expression).html_safe
  end
end
