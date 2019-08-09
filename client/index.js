import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { MapLoadingIndicator } from './components/MapLoadingIndicator';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.Fragment>
      <App />
      <MapLoadingIndicator />
    </React.Fragment>,
    document.getElementById('app')
  )
})
