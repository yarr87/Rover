## Rover
A 7-day project by Jeff Rosenberg  
View photos taken by Mars rovers

### Technologies Used
* Angular
* Gulp
* ES6
* npm
* bower

### Installation
Install node to get npm

Install bower:

`npm install -g bower`

Clone this repository using git
```
git clone https://github.com/yarr87/Rover.git
cd Rover
```
Or, just download the code manually

#### Install dependencies
From the project directory:

`npm install`
(takes a few minutes, might see some errors in the console)

`bower install`

#### Run the app
Run at http://localhost:3000 via

`gulp serve`

There are also a few unit tests available to run via

`gulp test`

### Credits
This project was seeded via the Yeoman Angular/Gulp generator: https://github.com/Swiip/generator-gulp-angular.  
Not having to set up the gulpfile = huge win!

Makes use of NASA data and images from https://api.nasa.gov/api.html#MarsPhotos

