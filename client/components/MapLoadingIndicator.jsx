import React from 'react'
import { usePromiseTracker } from "react-promise-tracker"

export const MapLoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker()

  return (
    <React.Fragment>
      {console.log(promiseInProgress)}
      { promiseInProgress === true ? 
      <h1>Hey some async call in progress !</h1> : null
    }
    </React.Fragment>
  )
}