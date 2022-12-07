const { Console } = require('console');
const fs = require('fs');

fs.readFile('tiedot.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

   /* //testi.txt tiedostolle
   var container = {
        1 : [["Z"],["N"]],
        2 : [["M"],["C"],["D"]],
        3 : [["P"]]
    } */

    var container = {
        1 : [["H"],["C"],["R"]],
        2 : [["B"],["J"],["H"],["L"],["S"],["F"]],
        3 : [["R"],["M"],["D"],["H"],["J"],["T"],["Q"]],
        4 : [["S"],["G"],["R"],["H"],["Z"],["B"],["J"]],
        5 : [["R"],["P"],["F"],["Z"],["T"],["D"],["C"],["B"]],
        6 : [["T"],["H"],["C"],["G"]],
        7 : [["S"],["N"],["V"],["Z"],["B"],["P"],["W"],["L"]],
        8 : [["R"],["J"],["Q"],["G"],["C"]],
        9 : [["L"],["D"],["T"],["R"],["H"],["P"],["F"],["S"]]
    }

    var siirrot = data.split("\r\n");

    for(let j = 0; j < siirrot.length; j++){
        var siirto = siirrot[j].replace(/move | from| to/g, "").split(" ");
        var montaLaatikkoa = siirto[0];
        var sijainti = siirto[1];
        var minne = siirto[2];

        for(let i = 0; i < montaLaatikkoa; i++){
            var kohta = container[sijainti].length-1;
            var laatikko = container[sijainti][kohta];
            container[sijainti].pop();
            container[minne].push(laatikko);
        }  
    }
    console.log(container);
});