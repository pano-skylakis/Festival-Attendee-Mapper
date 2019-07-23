import { Map as LeafletMap, TileLayer, Marker, Popup, Polygon, LayersControl } from 'react-leaflet'


export default {

  "babyCarriageIcon": new L.icon ({
    iconUrl: './images/babyCarriage.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  }),


  "firstAidIcon": new L.icon({
    iconUrl: './images/firstAid.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  }),


  "coffeeIcon": new L.icon({
    iconUrl: './images/coffee.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  }),


  "guitarIcon": new L.icon({
    iconUrl: './images/guitar.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  }),


  "informationIcon": new L.icon({
    iconUrl: './images/information.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  }),


  "trashIcon": new L.icon({
    iconUrl: './images/trash.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  }),


  "foodIcon": new L.icon({
    iconUrl: './images/food.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  }),


  "waterIcon": new L.icon({
    iconUrl: './images/water.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  }),


  "toiletIcon": new L.icon({
    iconUrl: './images/toilet.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  })
}
  
  // L.marker([50.505, 30.57], {icon: toiletIcon}).addTo(map);
  
  // const pointerIcon = new L.Icon({
  //   iconUrl: ‘./images/icon.svg’,
  //   iconRetinaUrl: ‘./images/icon.svg’,
  //   iconAnchor: [5, 55],
  //   popupAnchor: [10, -44],
  //   iconSize: [25, 55],
  //   shadowUrl: ‘./images/marker.png’,
  //   shadowSize: [68, 95],
  //   shadowAnchor: [20, 92],
  //  })
  