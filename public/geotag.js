 export const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 20
};


export function success(pos) {
  let crd = pos.coords;

  locationTag.latitude = crd.latitude
  locationTag.longitude = crd.longitude
  locationTag.accuracy = crd.accuracy,
  
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  console.log(Date.now().toString())
}

export function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}


// navigator.geolocation.watchPosition(success, error, options)