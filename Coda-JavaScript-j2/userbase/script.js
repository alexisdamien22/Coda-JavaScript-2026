let users = [];
while (true) {
    let action = prompt("afficher ou créer ?");
    if (action === "créer") {
        let user = { "firstName" : "", "lastName" : "", "age" : 0, "email" : "", "city" : "", "job" : "" };
        for (let key in user) {
            let userInfo;
            if(user.key === 0) {
                userInfo = Number(parseFloat(prompt("What is your "+key+" ?"),10));
            }else {
                userInfo = prompt("What is your "+key+" ?");
            }
            user[key] = userInfo;
        }
        users.push(user);
    }else if (action === "afficher") {
        for (let user of users) {
            console.log("=== Fiche Utilisateur ===");
            for (let key in user) {
                console.log(key+" : "+user[key]);
            }
        }
    }else {
        alert("action invalide");
    }
}