import React                from 'react';
import { combineReducers }  from 'redux';
import { applyMiddleware }  from 'redux';
import { createStore }      from 'redux';
import { Provider }         from 'react-redux';
import middleware           from 'redux-thunk';

import reducers             from '../reducers/reducers';
import HelloWorldContainer  from '../components/HelloWorldContainer';

export default (props) => {

  const reducer = combineReducers(reducers);
  const store   = applyMiddleware()(createStore)(reducer);

  return (
    <Provider store={store}>
      {() => <HelloWorldContainer {...props} />}
    </Provider>
  );

}
