require 'execjs_renderer'

module ApplicationHelper
  # def react_component(component_name, props = {})
#     js_expression = <<-JS
# "this is " + this + ", this.React is " + this.React + ", this['#{component_name}'] is " + this['#{component_name}']
#     JS
#     # this.renderReactComponent('#{component_name}', #{props.to_json});
#     js_render(js_expression)
#   end
  def react_component(component_name, props = {})
    js_expression = <<-JS
renderReactComponent('#{component_name}', #{props.to_json})
    JS
    js_render(js_expression)
  end

  def js_render(js_expression)
    puts "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ"
    puts "js_render js_expression = "
    puts js_expression
    puts "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ"

    ExecJSRenderer.new.render(js_expression).html_safe
  end
end
