const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage Leedu perenimi ", nimi => {
   if (nimi.slice(-2)=='ne'){
   console.log("Abielus")
    }
    else if (nimi.slice(-2)=='te'){
   console.log("Vallaline")
    }
    else if (nimi.slice(-2)=='e'){
    console.log("Maaramata")
    }
    rl.close()
    })