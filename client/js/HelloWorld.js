import React from 'react';

//function renderReactComponent(componentClass, props) {
//  return React.renderToString(
//    React.createElement(global[componentClass], props)
//  );
//}

class HelloWorld extends React.Component {
  render() {
    return React.createElement("h1", null, "Hello ", this.props.name);

  }
}

//global.HelloWorld = HelloWorld;
//global.renderReactComponent = renderReactComponent;
