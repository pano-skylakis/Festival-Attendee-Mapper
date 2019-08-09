import React from 'react'
import Loader from 'react-loader-spinner'
import { usePromiseTracker } from "react-promise-tracker"

export const MapLoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker()

  return (
    <React.Fragment>
      {console.log(promiseInProgress)}
      { promiseInProgress === true ? 
      <Loader 
        type="MutatingDots"
        color="#E67E22"
        height={100}
        width={100}
        /> : null
    }
    </React.Fragment>
  )
}