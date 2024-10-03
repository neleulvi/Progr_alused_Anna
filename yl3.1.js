const { log } = require('node:console');
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Sisestage numbrites, mitu korda äratus heliseb?" , kordustearv=>{
    for(i=0; i<kordustearv; i++){
      
      console.log ("Tõuse ja sära")

    }
    rl.close()
})