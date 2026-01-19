const fetchHeroes = async () => {
    try {
        const response = await fetch("http://localhost:3000/heroes");
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const heroes = await response.json();
        console.log("Liste des héros :", heroes);
        heroes.forEach(hero => {
            console.log(`${hero.name} - Niveau ${hero.level} - ${hero.class}`);
        });
    } catch (error) {
        console.error("Erreur lors de la récupération :", error.message);
    }
};