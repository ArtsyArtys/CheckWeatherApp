# Check Weather App
  Simple weather checking app for checking the next 3 days weather in your, or any other location.

## Installation
  Because this is not deployed on any dedicated servers right now, their is a requirement to create a file named ".env" in the "CheckWeatherApp" directory to use the Accuweather api key provided to the developer of this app. Without it, this app is non-functional. Until then, feel free to email me at Randy@ArtsyArtys.com and request it.
  In order to use this app, you must have node and npm installed on your computer as well as git. You can check if you have them by opening your bash/terminal (for linux/macOS users) or your command prompt (for Windows users) and typing in
  ```node --version
  npm --version
  git --version```. If no version numbers show up you can install node and npm at once by checking the directions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), and you can install git by checking the directions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
  Once you have those installed, you can type in ```git clone https://github.com/ArtsyArtys/CheckWeatherApp.git``` into your terminal/command prompt. Change directories into the new CheckWeatherApp folder created by either using ```cd CheckWeatherApp``` for linux/macOS or ```dir CheckWeatherApp``` for Windows. run ```npm install```, and wait for the load to finish. Create the ".env" file in the "CheckWeatherApp", and input the line ```ACCUWEATHER_API_KEY=``` followed by the api key I've given you via email, then type ```npm start``` to get started. Open your browser of choice and type or copy "localhost:1234" or simply click [here](http://localhost:1234) to check it out!

## Troubleshooting
  If the above steps were followed out of order, some issues may arise. If you have your terminal running the "npm start" command, hit Ctrl + C to exit out of it. Run ```npm install``` to ensure you have the dependencies for this project. Make sure you have the ".env" file (named exactly as quoted with no extension) and the contents should look something like ```ACCUWEATHER_API_KEY=Som3S3CRE+|<EY|-|ER3``` where "Som3S3CRE+|<EY|-|ER3" is the api key I've provided you via email. Then run npm start after saving this file. If you are still getting network errors, the fault probably lies with Accuweather's free tier of service, since it only provides 50 requests per app.
  Any further issues or complaints can be described to me at Randy@ArtsyArtys.com


### Notes
  This app was initialized with Create Web App, the purpose of which is to remove the strain of creating all the boilerplate
  for a new web project and standardize the filesystem architecture. Simply pick what initial setup you have, install any additional tools
  you would like to use, and start coding, like this person did. Check [here](https://github.com/ArtsyArtys/Create-Web-App) to try it out!

### Contact Information:
  Randy Dobbins: Randy@ArtsyArtys.com
