const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question ("Sisestage oma nimi", nimi  => {
rl.question ("Sisestage lubatud kiirus" , lubatudKiirus => {
rl.question ("Sisestage tegelik kiirus" , tegelikKiirus => {

let trahv = (tegelikKiirus-lubatudKiirus)*3
trahv = Math.min(trahv, 190)
console.log(`${nimi}, kiiruse ületamise eest on teie trahv ${trahv} eurot.   ` )
rl.close ()
})
})
})