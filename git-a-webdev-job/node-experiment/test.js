// Initial console.log tests

// console.log("Hello world");
// console.log(2+2);

// Setting up Node's fs (file system) and https modules and assigning them to variables.

var fs = require('fs');
var https = require('https');


// Using Node's fs (file system) module to create a file and save it in a designated folder.

// fs.writeFile(file, data, callback)
fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function(error) {
    if (error) {
        return console.log(error);
    } else {
        return console.log("Congrats");
    }
});

// Using Node's https to download and save an image from the internet.

// Setting the image url to a variable.
var myPhotoLocation = 'https://preview.redd.it/r8gkhpcq1jp51.jpg?width=1572&format=pjpg&auto=webp&s=9fbd89fd19f75c492637426d2c0e0984a52726bf';

// https.get(url, callback)
https.get(myPhotoLocation, function(response){
    response.pipe(fs.createWriteStream(__dirname + '/watchdogswallpaper'))
});