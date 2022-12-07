const fs = require('fs');

fs.readFile('tiedot.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var reput = data.split("\r\n");
  var summa = 0;
  var priorities = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  for(let reppu = 0; reppu < reput.length; reppu++){
    var määrä = reput[reppu].length;
    var tasku1 = removeDuplicateCharacters(reput[reppu].slice(0, määrä/2));
    var tasku2 = removeDuplicateCharacters(reput[reppu].slice(määrä/2, määrä));
    var samat = [];

    for(let i = 0; i < tasku1.length; i++){
        for(let j = 0; j < tasku2.length; j++){
            if(tasku1[i] == tasku2[j]){
                samat.push(tasku2[j]);
            }
        }
    }

    
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