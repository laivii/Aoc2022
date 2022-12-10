const fs = require('fs');

fs.readFile('tiedot.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    var commands = data.split("\r\n");
    var x = 1;
    var cycle = 0;
    var signal = 0;
    var calculateSignal = 20;

    for(let i = 0; i < commands.length; i++){
        var command = commands[i].split(" "); 
        cycle += 1;
        
        if(calculateSignal == cycle){
            signal += cycle * x;
            calculateSignal += 40;
        }

        if(command[0] == "addx"){
            cycle += 1;
            if(calculateSignal == cycle){
                signal += cycle * x;
                calculateSignal += 40;
            }
            var V = parseInt(command[1]);
            x += V;
        }
    }

    console.log(signal);
});