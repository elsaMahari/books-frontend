books-frontend
==============

the frontend of a books application

##Getting started

1. Clone project: `git clone git@github.com:elsaMahari/books-frontend.git`
2. Go to directory: `cd books-frontend`
3. Install grunt in the directory of the project: `npm install -g grunt-cli` and `bower install`

##Local development
For local developing, we are using the grunt server which can be started with `grunt serve` and runs on port 9000.
To run the application, the server of the [backend](https://github.com/elsaMahari/books-backend) needs to be running too to deliver the data for the frontend. A proxy has been defined into the grunt server to match the frontend port (9000) to the backend port (8080) so that AJAX-requests are possible (same origin policy).
