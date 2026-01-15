let tour = 1;
let joueur = 100;
let monstre = 100;
let damage = 0;
let joueurAttaques = [["lance une booule de feu", 25], ["donne un coup d'épée", 30], ["lance une flèche", 10]];
let monstreAttaques = [["vous saute dessus", 25], ["vous mord", 40]];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function attaqueMonstre() {
    return new Promise((resolve, reject) => {
        const hit = Math.random() > 0.3;
        setTimeout(() => {
            if (hit){
                resolve(monstreAttaques[getRandomInt(2)]);
            }
            else reject(["a raté !",0]);
        }, 300);
    });
}

function attaqueJoueur() {
    return new Promise((resolve, reject) => {
        const hit = Math.random() > 0.3;
        setTimeout(() => {
            if (hit){
                resolve(joueurAttaques[getRandomInt(3)]);
            }
            else reject(["a raté !",0]);
        }, 300);
    });
}

function receiveAttaque(callback){
    if(tour % 2 === 1){
        attaqueMonstre()
        .then((result) => {
            console.log(`    Le monstre ${result[0]}`);
        })
        .catch((error) => {
            console.log(`    Le monstre ${error[0]}`);
        })
        .finally(() => {
            console.log("Tour terminé");
            joueur -= damage;
            callback();
        });
    }else{
        attaqueJoueur()
        .then((result) => {
            console.log(`    Le joueur ${result[0]}`);
            damage = result[1];
        })
        .catch((error) => {
            console.log(`    Le joueur ${error[0]}`);
            damage = error[1];
        })
        .finally(() => {
            console.log("Tour terminé");
            monstre -= damage;
            callback();
        });
    }
}

function combat(){
    if(joueur <= 0){
        console.log("Le joueur est mort !");
        return;
    }
    if(monstre <= 0){
        console.log("Le monstre est vaincu !");
        return;
    }

    console.log("Tour " + tour+" :");
    receiveAttaque(() => {
        console.log("    PV du joueur : "+joueur);
        console.log("    PV du monstre : "+monstre);
        tour++;
        combat();
    });
}

combat();

