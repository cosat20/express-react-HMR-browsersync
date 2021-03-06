import React from 'react';
import ReactDOM from 'react-dom';
// import Router from 'react-router/lib/Router'; // import separately to reduce bundle size
// import browserHistory from 'react-router/lib/browserHistory'; // import separately to reduce bundle size
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import promise from 'redux-promise';
// import reducers from './reducers';
// import routes from './routes';

import Test from './components/Test'

const appRootEl = document.getElementById('app');





if (appRootEl) {
  // const store = applyMiddleware(promise)(createStore)(reducers);
  // const router = <Router history={browserHistory} routes={routes} />;
  if (process.env.NODE_ENV == 'production') {
    ReactDOM.render(<Test/>, appRootEl);
  } else {
    const AppContainer = require('react-hot-loader').AppContainer;
    const render = () => {
      ReactDOM.render(<AppContainer><Test/></AppContainer>, appRootEl);
    };
    // if (module.hot) {
    //   module.hot.accept('./reducers', () => { store.replaceReducer(reducers); });
    //   module.hot.accept('./routes', render);
    // }
    render();
  }
}
