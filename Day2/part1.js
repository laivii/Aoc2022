/* 
    ------------------------------------------------------------------
    | pisteet:   | Kirjaimet:    | Voitto:   | Häviö:    | Tasapeli: |
    ------------------------------------------------------------------
    | Rock     1 | A = Rock      | A => Y    | A => Z    | A == X    |
    | Paper    2 | B = Paper     | B => Z    | B => X    | B == Y    |
    | Siccors  3 | C = Scissors  | C => X    | C => Y    | C == Z    |
    |            |               |           |           |           |
    | Loose    0 | X = Rock      |           |           |           |
    | Draw     3 | Y = Paper     |           |           |           |
    | Win      6 | Z = Scissors  |           |           |           |
    ------------------------------------------------------------------
*/

const fs = require('fs');

fs.readFile('tiedot.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var pelit = data.split("\r\n");
  var score = 0;

  for(let i = 0; i < pelit.length; i++){
    var peli = pelit[i];
    var valinnat = peli.split(" ");

    if(valinnat[0]== "A"){
        if(valinnat[1]=="Y"){
            score += 6;
            score += 2;
        } else if(valinnat[1]=="X"){
            score += 3;
            score += 1;
        } else {
            score += 0;
            score += 3;
        }
    }else if(valinnat[0] == "B"){
        if(valinnat[1]=="Z"){
            score += 6;
            score += 3;
        } else if(valinnat[1]=="Y"){
            score += 3;
            score += 2;
        } else {
            score += 0;
            score += 1;
        }
    }else if(valinnat[0]=="C"){
        if(valinnat[1]=="X"){
            score += 6;
            score += 1;
        } else if(valinnat[1]=="Z"){
            score += 3;
            score += 3;
        } else {
            score += 0;
            score += 2;
        }
    }
  }
  console.log(score);
});