const fs = require('fs');
const path = require('path');

const imageFolder = './images/';
const outputPath = './imageArray.js'; // This will be loaded in your HTML file

fs.readdir(imageFolder, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  const imagePathArray = files.map(filename => path.join('images', filename));

  const output = 'const imagesDatabase = ' + JSON.stringify(imagePathArray, null, 2) + ';';
  
  fs.writeFile(outputPath, output, err => {
    if (err) {
      console.error("Error writing file", err);
    } else {
      console.log("Image array generated!");
    }
  });
});
