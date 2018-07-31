# Virtual Newsdeck:

This is a virtual newsdeck application which provides a simple UI for arranging newspapers for optimal predicted sales.

### Stack

|                         | Technologies             |
|:-----------------------:|:------------------------:|
| **Front end**           | React, Redux             |
| **Back end**            | Node                     |

### Setup and usage

Dependencies:
* node v10.4.1
* npm v6.1.0

1. Run `npm install`
2. Run `./build.sh`
3. Run `npm run start` to start the app on `localhost:9000`

### Features

* Swap newspapers in the newsdeck (center area) using simple drag and drop
* Pull from the list of all available newspapers in the sidebar (left area) and place them in the newsdeck using drag and drop
* Each drag and drop will recalculate the predicted sales, displayed on the right hand side
* Predicted sales display will always be in the top right, scrolling with the screen
* Application is responsive
* Application is written using React and Redux