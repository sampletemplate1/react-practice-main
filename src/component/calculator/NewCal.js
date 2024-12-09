import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Calculator from './Calculator'

export default function NewCal() {
  return (
    <div>
        <Provider store={store}>
            <Calculator/>
        </Provider>
    </div>
  )
}
