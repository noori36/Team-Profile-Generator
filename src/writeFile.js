const fs = require('fs');

//function to create HTML
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been created. check out the index.html")
        }
    })
}; 

module.exports = writeFile;