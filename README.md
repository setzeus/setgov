# Setgov


##Overview

This boilerplate uses redux for state handling throughout the whole app ( background page , content script and popup). All three files are bundled together using webpack (webpack.config.js).

The same webpack bundles are used for both development and production. Bundles and static files such as images and fonts are hosted in '/assets'.

## Getting Started

Clone latest repo and install dependencies:

	$ git clone https://github.com/setzeus/setgov.git

	$ cd setgov
	
	$ npm install


##Directory Layout

Get familiar with the folder structure

```
|-- /assets/								# Contains all webpack bundles and static assets.  Used for development AND production.
|-- /background/							# Holds all files associated with the background page of a chrome extension
	|-- /reducers/							# Reducers for redux
|-- /content/								# Holds all files associated with the content script of a chrome extension
	|-- /components/						# Any components used by the content script 
|-- /popup/									# Holds all files associated with popup of a chrome extension
	|-- /components/						# Files making up the UI and functionality of Popup
	|-- /css/								# Holds all the styling for popup
```

##Usage 

###General Info
Unlike other boiler plates the development is production ready. Editing files from outside the assets folder will be reflected in the produciton bundle.

An advantage of this process is that it uses one webpack file to bundle up all three of the main parts of your chrome extension: the popup, background page and content script. This makes it extremly easy to quickly test changes during development.

Additionally, you'll need to manually duplicate index.html from `~/popup/index.html` to `~/assets/`

##Begin development

### Setting up code linting

(Instructions for Sublime Text only)

1. Install SublimeLinter by following instructions here: http://sublimelinter.readthedocs.io/en/latest/installation.html (Just use Sublime Package Control)
2. Install eslint globally by typing the following in a terminal: `npm install eslint -g`
3. Restart Sublime Text
4. Install the SublimeLinter-contrib-eslint plugin by following instructions here: https://github.com/roadhump/SublimeLinter-eslint#plugin-installation (Just use Sublime Package Control)
5. If you have any issues with the installation check: https://github.com/roadhump/SublimeLinter-eslint#faq-and-troubleshooting


Open up the terminal and navigate to the root of the repo

First we'll need to create the basic bundle and output to the assets folder in the root directory

	$ npm run build

To access the app

1. Open Chrome, and type "chrome://extensions" into the URL bar
2. Ensure "Developer mode" is enabled, then click "Load unpacked extension..."
3. Select the "/assets" directory of the repo
4. The extension should appear in the top right of the browser
5. To access Developer Tools for the extension, just right click anywhere in the extension window and click "Inspect"

Webpack will listen to your files and hot reload on save, but you'll need to close and open the extension (or refresh your current tab) to actually see your changes

##Under the hood

Webpack watches over these entry points and reflects the changes in the production bundle 	

	./popup/index.js

	./background/src/index.js

	./content/src/index.js


###Popup development

popup behaves just like any React/Redux app using `popup/index.js as its entry point. This file also defines the port where it connects with the background page using react-chrome-redux

###Background page development

The background page holds the Redux store that communicates with the content script and the popup page

Redux store is created in `background/src/index.js`
	
Configure the reducers in `background/src/reducers`

###Content script development

Content script is injected through the background page in `background/index.js`

Script is injected on first tab created and any tab change ( basically whenever you change url )

Would be ecstatic to hear feedback, just open an issue!

###Huge shout out to @tshaddix much of this is based off his examples he gave at soCal Talk and for blessing us with react-chrome-redux