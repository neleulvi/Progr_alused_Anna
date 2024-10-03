const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Mitu pöialpoissi tahab õuna?", poialpoistearv => {
    let ounad=14
    for (let poiss=1; poiss<=poialpoistearv; poiss++){
        let ounadpoialpoistele=Math.ceil(Math.random()*2)
        console.log(ounadpoialpoistele)
        ounad=ounad-ounadpoialpoistele
    }
    console.log('Lumevalgekesele jai ' + ounad)
    rl.close()
})