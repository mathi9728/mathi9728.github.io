let ellocate = document.getElementById("locate");
ellocate.addEventListener("click", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function () {
            let ellat = document.getElementById("lat");
            let ellong = document.getElementById("long");

            ellat.innerHTML = "Latitude : " + position.coords.latitude;
            ellong.innerHTML = "Longitude : " + position.coords.longitude;
        })
    } else {
        alert("geolocation is not supported by this browser")
    }
})