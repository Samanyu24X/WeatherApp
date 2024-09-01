document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.getElementById('infoButton');
    const infoText = document.getElementById('infoText');

    infoButton.addEventListener('click', function() {
        // Toggle the visibility of the info text
        if (infoText.style.display === 'none') {
            infoText.style.display = 'block';
        } else {
            infoText.style.display = 'none';
        }
    });

    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function() {
        const location = document.getElementById('location').value;
        if (location) {
            // Make a request to the backend
            fetch(`/weather?location=${encodeURIComponent(location)}`)
                .then(response => response.json())
                .then(data => {
                    // Display the weather info
                    displayWeatherInfo(data);
                })
                .catch(error => console.error('Error fetching weather data:', error));
        } else {
            alert('Please enter a city.');
        }
    });

    function displayWeatherInfo(data) {
        const weatherInfo = document.getElementById('weatherInfo');
        const weatherText = document.getElementById('weatherText');
        const weatherImage = document.getElementById('weatherImage');

        // update the weather info and image (if I do the image)
        weatherText.textContent = data.description; 
        weatherImage.src = data.imageUrl; 

        // show the weather info section
        weatherInfo.style.display = 'block';
    }
});