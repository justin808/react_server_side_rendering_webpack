import React from 'react';

// Super simple example of the simplest possible React component
class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.name}
        </h1>
        <h2>
          So much FUN Samnang and Alex and Justin!
        </h2>
      </div>
    );
  }
}

export default HelloWorld;
