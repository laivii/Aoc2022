const fs = require('fs');

fs.readFile('tiedot.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    var signal = data;
    var first_marker = [];
    var characters = "";
    var index = 0;
    var removed = 0;

    for(let i = 0; i < signal.length; i++){
        var char = signal[i];
    
        if(characters.length == 4){
            first_marker.push(4+removed);
            break;
        }
    
        if(characters.includes(char) == true){
            characters = "";
            signal = signal.slice(1, signal.length);
            index = 0;
            i = 0;
            char = signal[i];
            removed += 1;
        }
    
        characters += char;
        index += 1;
    }
    console.log(first_marker);
});