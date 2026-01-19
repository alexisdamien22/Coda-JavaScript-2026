class Item {
    #name;
    #type;
    #value;
    #description;

    constructor(name, type, value, description) {
        this.#name = name;
        this.#type = type; // "arme", "armure", "potion", "materiau", "quete"
        this.#value = value; // valeur en or
        this.#description = description;
    }
    
    displayInfos() {
        console.log(`[${this.#type}] ${this.#name} - ${this.#value} or`);
        console.log(` ${this.#description}`);
    }
}