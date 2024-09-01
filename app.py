from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/weather')
def weather():
    location = request.args.get('location')
    
    # calling the API (need to replace this with the API key and endpoint)
    weather_api_url = f'http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q={location}'
    response = requests.get(weather_api_url)
    data = response.json()
    
    # Extract relevant data from the API response
    description = data.get('current', {}).get('condition', {}).get('text', 'No description available')
    image_url = data.get('current', {}).get('condition', {}).get('icon', '')
    
    # Return the data as JSON
    # possibly return an image as well?
    return jsonify({
        'description': description,
        'imageUrl': f'http:{image_url}'  # Prefix with 'http:' if the image URL is relative
    })

if __name__ == '__main__':
    app.run(debug=True)
