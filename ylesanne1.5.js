const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question ("Sisestage ainepunktide arv", ainepunktideArv =>{
rl.question ("Sisestage nädalate arv", nädalateArv => {
    let ajakulu = Math.round(ainepunktideArv*26/nädalateArv)
    //ajakulu=Math.round()
console.log (ajakulu)
    rl.close()
});
});