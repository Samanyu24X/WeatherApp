from flask import Flask, render_template, request, jsonify
import requests
from config import WEATHER_API_KEY  # import the API key from config.py

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/weather')
def weather():
    location = request.args.get('location')
    
    if not location:
        return jsonify({'error': 'No location provided'}), 400

    weather_api_url = f'http://api.weatherapi.com/v1/current.json?key={WEATHER_API_KEY}&q={location}'
    response = requests.get(weather_api_url)
    
    if response.status_code != 200:
        return jsonify({'error': 'Could not retrieve weather data'}), response.status_code

    data = response.json()
    
    # extract the data we want from the API response
    description = data.get('current', {}).get('condition', {}).get('text', 'No description available')
    image_url = data.get('current', {}).get('condition', {}).get('icon', '')
    temp_fahrenheit = data.get('current', {}).get('temp_f', 'N/A')  # the temperature in Fahrenheit
    
    # returns the data as JSON, including the location
    return jsonify({
        'location': location,  # include the location in the response
        'description': description,
        'imageUrl': f'http:{image_url}',  # prefix with 'http:' if the image URL is relative
        'temperature': temp_fahrenheit  # include the temperature in Fahrenheit
    })

if __name__ == '__main__':
    app.run(debug=True)