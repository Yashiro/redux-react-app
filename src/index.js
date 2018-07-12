import React from 'react'
import ReactDom from 'react-dom'
import { createStore } from './mushroom-redux'
import { Provider } from './mushroom-react-redux'
import { counter } from './index.redux'
import App from './App'

const store = createStore(counter)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)