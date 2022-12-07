const fs = require('fs');

fs.readFile('tiedot.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    var parit = data.split("\r\n");
    var samat = 0;
    
    for(let i = 0; i < parit.length; i++){
        var alueet = parit[i].split(",");
        var alue1 = alueet[0].split("-");
        var alue2 = alueet[1].split("-");
        alue1 = range(parseInt(alue1[0]),parseInt(alue1[1]));
        alue2 = range(parseInt(alue2[0]),parseInt(alue2[1]));
        var sisältyy = 0;

        for(let j = 0; j < alue1.length; j++){
            for(let k = 0; k < alue2.length; k++){
                if(alue1[j] == alue2[k]){
                    sisältyy += 1;
                }
            }
        }
        
        if(sisältyy > 0){
            samat += 1;
        }
    }
    console.log(samat);

    function range(start, end){
        return Array((end - start) + 1).fill().map((_,idx) => start + idx);
    }
});