import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return React.createElement("h1", null, "Hello ", this.props.name);

  }
}

export default HelloWorld;
