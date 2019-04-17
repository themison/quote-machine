import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import * as quotes from './quotes'
import * as random from 'randomcolor'




const initialState = {
  quote: quotes.default.quotes[Math.floor(Math.random() * quotes.default.quotes.length)],
  color: random({luminosity: "dark"}),
}


const store = createStore(rootReducer, initialState);


render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  )







