import { Map as LeafletMap, TileLayer, Marker, Popup, Polygon, LayersControl } from 'react-leaflet'


export const toiletIcon = L.icon({
    iconUrl: './images/toilet-solid.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  });
  
  
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
  