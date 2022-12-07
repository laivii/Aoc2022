const fs = require('fs');
const { listenerCount } = require('process');



fs.readFile('testi.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    var allData = data.split("\r\n");
    var missä = [];
    var direcories = {};

    for(let i = 0; i < allData.length; i++){
        var data = allData[i];
        data = data.split(" ");
        console.log(data);
        var where_we_are = data[2];

        if(data[1] == "cd" && data[2] == ".."){
            missä.pop();
            where_we_are = missä[missä.length-1];
            console.log(where_we_are);
            console.log(missä);
        } else {
            missä.push(data[2]);
            console.log(missä);
        }

        if(data[0] == "dir"){
            console.log("kansio");
            var kansio = [data[1]];
        }
    }
});


