import React                    from 'react';
import { connect }              from 'react-redux';

import HelloWorld               from './HelloWorld';

import * as helloWorldActions   from '../actions/HelloWorldActions';


@connect(state => ({
  helloWorld: state.helloWorld
}), helloWorldActions)

export default class HelloWorldContainer extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <HelloWorld {...this.props} />
    );

  }

}
