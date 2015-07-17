import React from 'react';

class HelloWorld extends React.Component {
  render() {
    //return React.createElement("h1", null, "Hello ", this.props.name);
    return (
      <div>
        <h1>
          Hello {this.props.name}
        </h1>
        <h2>
          So much FUN!
        </h2>
      </div>
    );
  }
}

export default HelloWorld;
