const fs = require('fs');

fs.readFile('tiedot.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    var CTR = [];
    var commands = data.split("\r\n");
    var x = 1;
    var cycle = 0;
    var signal = 0;
    var calculateSignal = 20;
    var CTR_row = 0;
    var cycle2 = 0;

    for(let j = 0; j < 6; j++){
        var new_row = [];
        for(let k = 0; k < 40; k++){
            var new_pixel = ".";
            new_row.push(new_pixel);
        }
        CTR.push(new_row);
    }

    for(let i = 0; i < commands.length; i++){
        var command = commands[i].split(" "); 
        cycle += 1;
        cycle2 += 1;

        if(cycle2-1 == x-1 ||cycle2-1== x ||cycle2-1== x+1 ){
            CTR[CTR_row][cycle2-1] = "#";
        }
        
        if(calculateSignal == cycle){
            signal += cycle * x;
            calculateSignal += 40;
        }

        if(cycle2%40 == 0){
            CTR_row += 1;
            cycle2 = 0;
        }

        if(command[0] == "addx"){
            cycle += 1;
            cycle2 += 1;
            if(calculateSignal == cycle){
                signal += cycle * x;
                calculateSignal += 40;
            }
            if(cycle2-1== x-1 ||cycle2-1== x ||cycle2-1== x+1 ){
                CTR[CTR_row][cycle2-1] = "#";
            }
            if(cycle2%40 == 0){
                CTR_row += 1;
                cycle2 = 0;
            }
            var V = parseInt(command[1]);
            x += V;
        }
    }

    console.log(CTR, signal);
});