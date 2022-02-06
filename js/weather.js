function onGeoSuccess(userLocation){
    console.log(userLocation);
}

function onGeoError(){
    alert("Can't Find the Location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);