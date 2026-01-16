function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const startButton = document.getElementById("Start");
let chevalChoisi = null;
let chevalGagnant = null;
const regex = /cheval (\d+).*/; 
const nbChevaux = 3 + getRandomInt(4);
const chevaux = [];
const promises = [];

for (let i = 1; i < nbChevaux+1; i++) {
    chevaux.push(["cheval " + i, 10000 + 1000 * getRandomInt(10)])
}

function simulerCheval(nom, temps) {
    return new Promise((resolve, reject) => {
        console.log(`Le ${nom} a commencé.`);
        setTimeout(() => {
            if (Math.random() < 0.05) {
                console.error(`Le ${nom} a abandonné !`);
                reject(`${nom} n'a pas terminé.`);
            } else {
                console.log(`Le ${nom} a terminé en ${temps / 1000} secondes.`);
                resolve(`${nom} - Terminé en ${temps / 1000}s`);
            }
        }, temps);
    });
}

function startRace(){
    if(chevalChoisi != null){
        for (let j = 0; j < nbChevaux; j++) {
        promises.push(simulerCheval(chevaux[j][0],chevaux[j][1]));
        }

        Promise.race(promises)
        .then((result) => {
            const resultNumber = result.match(regex);
            chevalGagnant = resultNumber[1];
        });

        Promise.all(promises)
        .then((resultats) => {
            console.log("Tous chevaux ont terminé la course !");
            if(chevalGagnant === chevalChoisi-1){
                console.log("Votre cheval a gagné! Bravo!")
            }else{
                console.log("Vous avez perdu! Dommage...")
            }
            console.log("Résultats :", resultats);
        })
        .catch((erreur) => {
            console.error("La course a été interrompue :", erreur);
        });
    }
}

function buildChevauxButtons() {
    const chevauxList = document.getElementById("Chevaux");

    chevaux.forEach((cheval, index) => {
        const btn = document.createElement("button");
        btn.id = `cheval-${index}`;
        btn.textContent = cheval[0];

        btn.addEventListener("click", () => {
            chevalChoisi = index;
            console.log(`Tu as choisi le ${cheval[0]}`);
        });

        chevauxList.appendChild(btn);
    });

}

startButton.addEventListener("click", () => {
        startRace();
    });

buildChevauxButtons();