const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Sisestage täringute arv", täringutearv =>{
   for(let vise=0; vise<täringutearv; vise++){
    console.log(Math.ceil(Math.random()*6)) 
   }
    
rl.close()
})