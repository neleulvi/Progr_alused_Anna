const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Mitu ringi jänes jooksis?", ringidearv =>{
    let porganditearv=0
    for(ring=1; ring<=ringidearv; ring++) {
      if(ring%2==0){
        porganditearv = porganditearv + ring
    }
    }
    console.log('Porgandite koguarv on ' + porganditearv)
    rl.close()
})
