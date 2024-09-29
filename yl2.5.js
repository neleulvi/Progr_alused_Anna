const { log } = require('node:console');
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question ("Sisestage kirja suurus", kirjasuurus =>{
  rl.question("Sisestage kirja pealkiri", pealkiri =>{
    rl.question("Kas kirjaga on kaasas fail?", fail =>{

  

      if (! pealkiri || kirjasuurus < 1 && fail === "jah"){
        console.log("Kiri on spämm")
      }
      else{
        console.log("Kiri ei ole spämm")
      }
      rl.close()
    })
  })
})