import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.Fragment>
      <App />
    </React.Fragment>,
    document.getElementById('app')
  )
})
