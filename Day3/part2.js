const fs = require('fs');

fs.readFile('tiedot.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    var reput = data.split("\r\n");
    var summa = 0;
    var priorities = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  
    for(let reppu = 0; reppu < reput.length; reppu+=3){
        var ryhmä = [removeDuplicateCharacters(reput[reppu]),removeDuplicateCharacters(reput[reppu+1]),removeDuplicateCharacters(reput[reppu+2])];
        var reppu1 = ryhmä[0];
        var reppu2 = ryhmä[1];
        var reppu3 = ryhmä[2];
        var samat = [];

        for(let i = 0; i < reppu1.length; i++){
            for(let j = 0; j < reppu2.length; j++){
                for(let k = 0; k < reppu3.length; k++){
                    if(reppu1[i] == reppu2[j] && reppu2[j] == reppu3[k]){
                        samat.push(reppu3[k]);
                    }
                }
            }
        }

        console.log(samat);

        var priority = priorities.indexOf(samat[0]);
        summa += priority;
    }

    console.log(summa);
});

function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
}