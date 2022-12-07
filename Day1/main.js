const fs = require('fs');

fs.readFile('tiedot.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //Hae tiedot ja jaa kohdasta "\r\n\r\n" jolloin saadaan tontut erikseen
  var tiedot = data.split("\r\n\r\n");
  var kaikkiKalorit = [];

  for(let i = 0; i < tiedot.length; i++){
    var tonttu = tiedot[i];
    var ateriat = tonttu.split("\n");
    var kalorit = 0;

    for(let j = 0; j < ateriat.length; j++){
      var ateria = parseInt(ateriat[j]);
      kalorit += ateria;
    }
    kaikkiKalorit.push(kalorit);
  } 

  var suurin = Math.max(...kaikkiKalorit);
  console.log(suurin);

  var sorted = kaikkiKalorit.sort(function(a, b){return b - a});
  var kolmesuurinta = sorted[0]+sorted[1]+sorted[2];
  console.log(kolmesuurinta);
});