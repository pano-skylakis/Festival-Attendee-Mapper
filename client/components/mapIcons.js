import { Map as LeafletMap, TileLayer, Marker, Popup, Polygon, LayersControl } from 'react-leaflet'



export const toiletIcon = L.icon({
    iconUrl: './images/toilet.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  });

  export const babyCarriageIcon = L.icon({
    iconUrl: './images/baby-carriage.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  });

  export const firstAidIcon = L.icon({
    iconUrl: './images/first-aid.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  });

  export const coffeeIcon = L.icon({
    iconUrl: './images/coffee.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  });

  export const guitarIcon = L.icon({
    iconUrl: './images/guitar.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  });

  export const informationIcon = L.icon({
    iconUrl: './images/information.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  });

  export const trashIcon = L.icon({
    iconUrl: './images/trash.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  });
  
  export const foodIcon = L.icon({
    iconUrl: './images/food.svg',
    iconSize: [15, 35],
    iconAnchor: [9, 25],
    popupAnchor: [10, -44],
  });

  export const waterIcon = L.icon({
    iconUrl: './images/water.svg',
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
  