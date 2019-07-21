import {getHeatMapValues, getHeatMapIntensity} from '../api/geoLocationApi'


export function returnHeatmapValues(){
  let heatmapData = []
  let heatmapValues = []

  getHeatMapValues()
      .then(values => {
        heatmapValues = values
        return values
      })
      .then(values => {
        return values.map(value => {
          getHeatMapIntensity(value)
            .then(res => {
              let newArr = []
              value.intensity = res + ''
              newArr.push(value.latitude_rounded, value.longitude_rounded, value.intensity)
              return newArr
            })
            .then(data => {
              heatmapData = data
            })
            .then(()=>{return heatmapData})
        })
      })
}




