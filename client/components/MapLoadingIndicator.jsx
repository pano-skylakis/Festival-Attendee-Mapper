import React from 'react'
import Loader from 'react-loader-spinner'
import { usePromiseTracker } from "react-promise-tracker"

export const MapLoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker({area: props.area})

  return (
    <React.Fragment>
      {console.log(promiseInProgress)}
      { promiseInProgress === true ? 
        <div className="map-loader">
          <Loader
            type="MutatingDots"
            color="#E67E22"
            height={100}
            width={100}
            />
        </div> : null
    }
    </React.Fragment>
  )
}