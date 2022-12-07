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
        alue1 = "," + range(parseInt(alue1[0]),parseInt(alue1[1])).toString() + ",";
        alue2 = "," + range(parseInt(alue2[0]),parseInt(alue2[1])).toString() + ",";
        
        if(alue1.includes(alue2) == true || alue2.includes(alue1)== true){
            samat += 1;
        }
    }

    console.log(samat);
    
    function range(start, end){
        return Array((end - start) + 1).fill().map((_,idx) => start + idx);
    }
});