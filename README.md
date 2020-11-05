# PPTX DEMO

## Install on local

* run ```docker-compose up -d --build``` to build and start the development server in detached containers

* you can use ```docker-compose ps``` to ssee the status of the containers

* unless changes are made in the ```Dockerfile``` files, the containers can be restarted with ```docker-compose up -d --build```

* you can use ```docker-compose stop``` to stop the containers

* Check the App running in a Browser at http://localhost:8001/ (WINDOWS)

* Test file generation with http://localhost:8001/api - the file first.pptx is generated in app/demo
