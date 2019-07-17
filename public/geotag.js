const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 20
};

function success(pos) {
  let crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  console.log(Date.now().toString())
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}


navigator.geolocation.watchPosition(success, error, options)