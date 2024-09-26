const prompt = require('prompt-sync')();

let filename = prompt("Enter the filename: ");

// assuming the file extension is always three alphabets:
// dog.png
// cat.jpg
// chicken.tiff

// but the following won't work "apples.fruit.png"
let indexOfDot = filename.indexOf(".");
let extension = filename.slice(indexOfDot + 1);

if (extension == 'jpg' || extension == 'png') {
    console.log("Is an image file");
}

// 2nd method: using split
let chunk = filename.split('.');
let extension2 = chunk[1];

// 3rd method: using endsWith
if (filename.endsWith("jpg") || filename.endsWith("png")) {
    console.log("is an image");
}