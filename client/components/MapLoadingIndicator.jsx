import React from 'react'
import { usePromiseTracker } from "react-promise-tracker"

export const MapLoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker()

  return (
    <React.Fragment>
      { promiseInProgress === true ?
      console.log('inProgress') 
       : null
    }
    </React.Fragment>
  )
}