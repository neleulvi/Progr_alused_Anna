const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisesta ohutemperatuur', õhutemperatuur=>{
    if (õhutemperatuur < 4.0) {
   console.log("On  jäätumise oht ");
   } 
    else if (õhutemperatuur >= 4.0) {
console.log("Ei ole jäätumise ohtu");
}
   rl.close()

  })
  