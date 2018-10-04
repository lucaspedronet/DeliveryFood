import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import Routes from './Routes'
import './config/ReactotronConfig'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Routes />
      </Fragment>
    </Provider>
  );
}

export default App;
