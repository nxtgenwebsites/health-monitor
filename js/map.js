let currentLocation = document.getElementById('current-location');
let mapIframe = document.getElementById('map-iframe');
let hospitalsList = document.getElementById('hospitals-list');

currentLocation.addEventListener('click', () => {
    async function getData(lat, long) {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?unitGroup=metric&key=C5HGHQKLALDP5ENMSU95UUGKR&contentType=json`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching weather data: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Weather API Error:", error);
            return null;
        }
    }

    function currentLocate() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async function (position) {
                    const lat = position.coords.latitude;
                    const long = position.coords.longitude;
                    console.log("Current Location:", lat, long);

                    try {
                        const result = await getData(lat, long);
                        if (result && result.resolvedAddress) {
                            console.log(`Your Location: ${result.resolvedAddress}`);
                        } else {
                            console.log("Unable to resolve address.");
                        }
                        mapIframe.src = `https://www.google.com/maps?q=${lat},${long}&output=embed`;
                        fetchNearbyHospitals(lat, long);
                    } catch (error) {
                        console.error("Error fetching location data:", error);
                        console.log("Error fetching location.");
                    }
                },
                function (error) {
                    console.error("Geolocation Error:", error.message);
                    console.log(`Error: ${error.message}`);
                },
                {
                    enableHighAccuracy: true,
                }
            );
        } else {
            console.log("Geolocation is not supported by your browser.");
        }
    }

    function fetchNearbyHospitals(lat, long) {
        const location = new google.maps.LatLng(lat, long);
        const service = new google.maps.places.PlacesService(document.createElement('div'));

        service.nearbySearch(
            {
                location: location,
                radius: 5000,
                type: 'hospital',
            },
            (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    console.log("Nearby Hospitals:", results);
                    displayHospitals(results);
                } else {
                    console.error("Places API Error:", status);
                    hospitalsList.innerHTML = "Unable to fetch nearby hospitals.";
                }
            }
        );
    }

    function displayHospitals(hospitals) {
        hospitalsList.innerHTML = "";
        hospitals.forEach((hospital) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${hospital.name}</strong><br>${hospital.vicinity}`;
            hospitalsList.appendChild(listItem);
        });
    }

    currentLocate();
});