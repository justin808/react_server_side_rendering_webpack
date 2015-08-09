import React                from 'react';
import { combineReducers }  from 'redux';
import { applyMiddleware }  from 'redux';
import { createStore }      from 'redux';
import { Provider }         from 'react-redux';
import middleware           from 'redux-thunk';

import reducers             from '../reducers/reducers';
import HelloWorldContainer  from '../components/HelloWorldContainer';

const App = (props) => {

  const reducer = combineReducers(reducers);
  const store   = applyMiddleware()(createStore)(reducer);

  const AppContainer = (
    <Provider store={store}>
      {() => <HelloWorldContainer {...props} />}
    </Provider>
  );

  const appDOMNode = document.getElementById('app');

  React.render(AppContainer, appDOMNode);

}

// TODO: Deal with console warning:
// Warning: render(): Target node has markup rendered by React, but there are unrelated nodes as well. 
// This is most commonly caused by white-space inserted around server-rendered markup.
export default App(__PROP_FROM_RAILS__);
