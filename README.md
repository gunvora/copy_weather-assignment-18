# Sprint 2 – Build a Weather Dashboard :sunny:

Today's assignment is to build a simple weather dashboard that tells today's weather and temperature using a weather API. We will start by keeping it simple and then there's great possibilities to build on with stretch goals. The page, before stretch goals should look something along the lines of this:

![Design](https://github.com/Technigo/assignment-weather/blob/master/weather_app.png)

## How to complete this assignment

### Get started with the weather API.

[Sign up for a free Open Weather Map account](https://home.openweathermap.org/users/sign_up). Once signed in, go to the "Api Keys" tab and copy the API Key. You can use the API Key in the APPID parameter when making calls to the openweathermap API.

For example, to get the current weather in Stockholm, you can use the url below. Remember to replace "YOUR_API_KEY" with the API key you copied from your dashboard.

http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=YOUR_API_KEY

The response should look something like this (this has been run through jsonlint.com to add newlines and indentation):

```json

{
	"coord": {
		"lon": 18.06,
		"lat": 59.33
	},
	"weather": [{
		"id": 800,
		"main": "Clear",
		"description": "clear sky",
		"icon": "01d"
	}],
	"base": "stations",
	"main": {
		"temp": 6.47,
		"pressure": 1007,
		"humidity": 56,
		"temp_min": 6,
		"temp_max": 7
	},
	"visibility": 10000,
	"wind": {
		"speed": 3.6,
		"deg": 200
	},
	"clouds": {
		"all": 0
	},
	"dt": 1509709800,
	"sys": {
		"type": 1,
		"id": 5420,
		"message": 0.0024,
		"country": "SE",
		"sunrise": 1509689610,
		"sunset": 1509720490
	},
	"id": 2673730,
	"name": "Stockholm",
	"cod": 200
}
```

As you can see, there's a bunch of useful information in there - including current temperature, windspeed, humidity, etc.

You will need to use the `fetch()` function in JavaScript to load the weather data into your page, and then select the values you want to inject into the DOM from the JSON which comes from the API.

### Present the data on your page

Your task is to present the data: the city name, the temperature (rounded to 1 decimal place), and what type of weather it is (the "description" in the JSON).

Once you get the data onto your page, style your page however you'd like to with CSS, OR add more data to make it even more useful! See suggestions in the stretch goals section.

## How to complete this assignment

To complete this assignment, you need to fork this repository, add your code in the "code" folder, and then submit a pull request on GitHub (from your repository into the technigo one) for review. [Read the guide on GitHub](https://guides.github.com/activities/forking/) for more info on how to do this.

### :books: Reading List

* [MDN Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [Open Weather API Documentation](https://openweathermap.org/current)
* [.toFixed()](https://www.w3schools.com/jsref/jsref_tofixed.asp)

---

### :sos: How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask Damien or David. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment you should know when an API is, and what you could use one for. You should be comfortable using simple APIs to fetch data onto your page, and you should know how to fetch the values you want from a blob of JSON.

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Change background image or background color depending on what weather or temperature it is.
1. Add which time the sun rise and sets.
1. Add so that you can choose by three different cities.

### :runner: :runner: :runner: SUPER STRETCH GOAL

The super stretch goal of this task is to package your site as a chrome extension.

:warning: The guide below is from Tjejer Kodar in London 2015. I haven't had a chance to check if it is still correct or not. It _should_ work, but have your finger ready on the google button if this doesn't work... :warning:

Chrome extensions are surprisingly simple to create. By packing the app as an extension, you’ll be able to run your weather app by clicking a button in the toolbar. All you need to do to package your app is to create a manifest, give it an icon, then install it in chrome. To create the manifest, make a new file called manifest.json in the "code" folder of this project. Within it, place this:

```
{
  "manifest_version": 2,
  "name": "Weather Dashboard",
  "description": "",
  "version": "1.0",
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "index.html"
  }
}
```

Finally, in chrome, go to Settings and then open Extensions in the sidebar. Make sure the ‘Developer mode’ checkbox is ticked, then click on the ‘Load unpacked extension’ button. Select this assignment's "code" folder and click ‘open’. You should now see the app in your extension list and and you should also see a new icon in Chrome! When you click the icon now, it’ll load your app in a popup. Just remember, when you make changes to your app, you may need to come back into the Chrome Extensions interface and click reload on your app.
