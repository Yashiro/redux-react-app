import React from 'react'
import ReactDom from 'react-dom'
import thunk from './mushroom-redux-thunk'
import arrayThunk from './mushroom-redux-array'
import { createStore, applyMiddleware } from './mushroom-redux'
import { Provider } from './mushroom-react-redux'
import { counter } from './index.redux'
import App from './App'

const store = createStore(counter, applyMiddleware(thunk, arrayThunk))

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)