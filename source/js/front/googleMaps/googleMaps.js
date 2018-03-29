if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        // infoWindow.setPosition(pos);
        // infoWindow.setContent('Location found.');
        alert("I found you!");
        // map.setCenter(pos);
    }, function() {
        console.log('location error');
    });
} else {
    // Browser doesn't support Geolocation
    console.log('Browser doesn\'t support Geolocation');
}