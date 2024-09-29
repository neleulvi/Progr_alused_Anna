const { log } = require('node:console');
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Kas soovite istekoha valida ise ("ise") voi loosides ("loos")?', istekohtIseLoos =>{
    
    if(istekohtIseLoos == 'ise'){
        rl.question('kas ta soovib istuda akna ääres (aken) või muu(muu).' ), istekohaValik =>{
            if(istekohaValik == 'aken'){
                console.log('Valisite ise. Aknakoht');
            } 
            else if (istekohaValik =='muu'){
            console.log("Valisite muu koha")
            }
             rl.close()   
        }
        
    }else if(istekohtIseLoos == 'loos'){
        let valisLoos = Math.ceil(Math.random()*3)
            if (valisLoos <1/3){
            console.log("Aknakoht")
             }
             else{
            console.log("Muu koht")
            }
            rl.close()
        }
})