import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { LoadingIndicator } from "./components/MapLoadingIndicator"


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.Fragment>,
      <App />,
      <LoadingIndicator />,
    </React.Fragment>,
    document.getElementById('app')
  )
})
