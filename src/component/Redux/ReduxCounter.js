import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Counter from './Counter'

export default function ReduxCounter() {
  return (
    <div>
        <Provider store={store}>
            <Counter/>
        </Provider>
    </div>
  )
}
