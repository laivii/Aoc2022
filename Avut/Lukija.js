const fs = require('fs');

fs.readFile('testi.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

});