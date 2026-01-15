function rollDice(minimum, faces) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = Math.floor(Math.random() * faces) + 1;
            if (result >= minimum) {
                resolve({ result, message: `Succès ! Vous avez fait ${result}` });
            } else {
                reject({ result, message: `Échec... Vous avez fait ${result}` });
            }
        }, 500);
    });
}