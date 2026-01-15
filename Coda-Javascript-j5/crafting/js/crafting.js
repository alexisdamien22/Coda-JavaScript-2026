const resources = {
    rawIron: 0,
    log: 0,
    plank: 0,
    stick: 0,
    ironIngot: 0,
    sword: 0,
    pickaxe: 0
};

const recipes = {
    plank: {
        output: ["plank", 4],
        ingredients: [["log", 1]],
        time: 200
    },
    stick: {
        output: ["stick", 2],
        ingredients: [["plank", 1]],
        time: 200
    },
    ironIngot: {
        output: ["ironIngot", 1],
        ingredients: [["rawIron", 1]],
        time: 2000
    },
    sword: {
        output: ["sword", 1],
        ingredients: [["stick", 1], ["ironIngot", 2]],
        time: 5000
    },
    pickaxe: {
        output: ["pickaxe", 1],
        ingredients: [["stick", 2], ["ironIngot", 3]],
        time: 5000
    }
};

function collectLog() {
    getLog();
    logMsg("🌲 +1 log");
    updateInventory();
}

function collectRawIron() {
    getRawIron();
    logMsg("⛏️ +1 rawIron");
    updateInventory();
}

function getRawIron() {
    resources.rawIron++;
}

function getLog() {
    resources.log++;
}

function craft(itemName) {
    return new Promise((resolve, reject) => {
        const recipe = recipes[itemName];
        if (!recipe) return reject("Unknown recipe: " + itemName);
        for (const [res, amount] of recipe.ingredients) {
            if (resources[res] < amount) {
                return reject("Not enough " + res);
            }
        }
        for (const [res, amount] of recipe.ingredients) {
            resources[res] -= amount;
        }
        setTimeout(() => {
            const [outName, outAmount] = recipe.output;
            resources[outName] += outAmount;
            console.log("Crafted " + outName);
            resolve("Crafted " + outName);
        }, recipe.time);
    });
}

function autoCraft(itemName) {
    const recipe = recipes[itemName];
    if (!recipe) return Promise.reject("Recette inconnue : " + itemName);

    let chain = Promise.resolve();

    recipe.ingredients.forEach(([res, amountNeeded]) => {
        chain = chain.then(() => {
            const current = resources[res];

            if (current >= amountNeeded) {
                return;
            }

            const missing = amountNeeded - current;

            if (res === "log" || res === "rawIron") {
                console.warn(`Il manque ${missing} ${res} !`);
                return Promise.reject(`Manque de matière première : ${res}`);
            }

            console.log(`Il manque ${missing} ${res}, je les craft...`);
            let subChain = Promise.resolve();

            for (let i = 0; i < missing; i++) {
                subChain = subChain.then(() => autoCraft(res));
            }

            return subChain;
        });
    });

    return chain.then(() => craft(itemName));
}


function orderSword() {
    autoCraft("sword");
}

function orderPickaxe() {
    autoCraft("pickaxe");
}

// ----------------
// COPILOT
// ----------------

function updateInventory() {
    const inv = document.getElementById("inventory");
    inv.innerHTML = "";

    Object.entries(resources).forEach(([name, amount]) => {
        inv.innerHTML += `
            <div class="resource">
                <span>${name}</span>
                <span>${amount}</span>
            </div>
        `;
    });
}

function buildCraftButtons() {
    const craftList = document.getElementById("craftList");

    // Boutons de craft
    Object.keys(recipes).forEach(item => {
        craftList.innerHTML += `
            <button onclick="craftItem('${item}')">
                Craft ${item}
            </button>
        `;
    });

    // Boutons de ressources de base
    craftList.innerHTML += `
        <button onclick="collectLog()">
            Récupérer 1 log
        </button>
        <button onclick="collectRawIron()">
            Récupérer 1 rawIron
        </button>
    `;
}

function craftItem(item) {
    autoCraft(item)
        .then(msg => logMsg("✔️ " + msg))
        .catch(err => logMsg("❌ " + err))
        .finally(updateInventory);
}

function logMsg(text) {
    const box = document.getElementById("logBox");
    box.innerHTML += text + "<br>";
    box.scrollTop = box.scrollHeight;
}

// ----------------------
// INITIALISATION
// ----------------------

updateInventory();
buildCraftButtons();


