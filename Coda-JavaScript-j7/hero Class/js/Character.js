class Character {
    constructor(id, name, type, level, hp, attack, defense, gold) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.level = level;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.gold = gold;
    }

    attack() {
        console.log(`${this.name} attaque avec ${this.attack} de force !`);
    }
}
let characters = [];
async function fetchHeroes() {
  try {
    const response = await fetch("http://localhost:3000/heroes");

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const heroes = await response.json();

    console.log("Liste des héros :", heroes);

    for (const hero of heroes) {
      console.log(`${hero.name} - Niveau ${hero.level} - ${hero.class}`);
      characters.push(new Character(hero.id, hero.name, hero.class, hero.level, hero.hp, hero.attack, hero.defense, hero.gold));
    }

    return heroes;
  } catch (error) {
    console.error(error);
  }
}
fetchHeroes();