Walkthrough: https://youtu.be/rHlI2iX_tPA?si=aZv3_tuqM_un0WWP

This is my submission for the PM Accelerator Technical Assessment. The web app is written using HTML/CSS/JS with Flask acting as the server-side backend.

To run this code on your local machine, you must do the following:

1. Download this repository
2. In the same folder directory that app.py is being stored in, create a file called config.py
4. Inside the config.py file, add one single line of code like this: WEATHER_API_KEY = 'exampleAPIKEY'
5. Delete the string in the example ('exampleAPIKEY') and replace it with your WeatherAPI API key.
6. If you do not have your own API key, go to https://www.weatherapi.com/docs/ and sign up to get the FREE API Key.
7. Example: Suppose your API key is 'abcdef', then your config.py file should contain only one line as such: WEATHER_API_KEY = 'abcdef'

Now that you've created your config.py file and added the API key to it, the main program file, app.py, will import the API key, allowing you to see the current weather!
(Note: You must run this file in the terminal by using the command "py app.py" or "python app.py" depending on your python version. You may need to install Flask, if you don't already have it installed
