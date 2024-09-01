document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.getElementById('infoButton');
    const infoText = document.getElementById('infoText');

    infoButton.addEventListener('click', function() {
        // toggles the visibility of the info text
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
            // make a request to the backend
            fetch(`/weather?location=${encodeURIComponent(location)}`)
                .then(response => response.json())
                .then(data => {
                    // display the weather info
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
    
        // this is the initial message text before we add any special text based on weather
        let message = `It is ${data.description} in ${data.location}, with a temperature of ${data.temperature} degrees.`;
        
        // add conditional messages based on the weather description
        if (data.description.toLowerCase().includes('sunny')) {
            message += ' Remember to grab some sunscreen!';
        } else if (data.description.toLowerCase().includes('rain')) {
            message += ' Make sure you grab an umbrella!';
        }
    
        // update the weather info with the complete message
        weatherText.textContent = message;
        weatherImage.src = data.imageUrl;
    
        // show the weather info section
        weatherInfo.style.display = 'block';
    }

});