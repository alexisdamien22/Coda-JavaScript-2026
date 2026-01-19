class Character {
	#id;
	#name;
	#type;
	#level;
	#hp;
	#maxHp
	#attack;
	#defense;
	#gold;
	#items;

	constructor(id, name, type, level, hp, attack, defense, gold) {
		this.#id = id;
		this.#name = name;
		this.#type = type;
		this.#level = level;
		this.#hp = hp;
		this.#maxHp = hp;
		this.#attack = attack;
		this.#defense = defense;
		this.#gold = gold;
		this.#items = [];
	}

	set id(newId) {
		this.#id = newId;
	}

	get id() {
		return this.#id;
	}

	set name(newName) {
		if(newName.trim().length < 3){
			throw new Error("Le nom doit faire au moins 3 charactères");
		}
		this.#name = newName;
	}

	get name() {
		return this.#name;
	}

	set type(newType) {
		this.#id = newType;
	}

	get type() {
		return this.#type;
	}

	set level(newLevel) {
		this.#level = newLevel;
	}

	get level() {
		return this.#level;
	}

	set hp(newHp) {
		newHp = Number(newHp);

		if (Number.isNaN(newHp)) {
			throw new Error("Le nombre de points de vie doit être un nombre");
		}

		if (newHp < 0) {
			throw new Error("Le nombre de points de vie doit être supérieur ou égal a 0");
		}

		this.#hp = newHp;
	}

	get hp() {
		return this.#hp;
	}

	set maxHp(newMaxHp) {
		newMaxHp = Number(newMaxHp);

		if (Number.isNaN(newMaxHp)) {
			throw new Error("Le nombre maximum de points de vie doit être un nombre");
		}

		if (newMaxHp < 1) {
			throw new Error("Le nombre maximum de points de vie doit être supérieur ou égal a 1");
		}

		this.#hp = newMaxHp;
	}

	get maxHp() {
		return this.#maxHp;
	}

	set attack(newAttack) {
		this.#attack = newAttack;
	}

	get attack() {
		return this.#attack;
	}

	set defense(newDefense) {
		this.#defense = newDefense;
	}

	get defense() {
		return this.#defense;
	}

	set gold(newGold) {
		this.#gold = newGold;
	}

	get gold() {
		return this.#gold;
	}

	addItem(newItem) {
		this.#items.forEach(item => {
			if(item.Objet = newItem){
				item.amount++;
			}
			else{
				this.#items.push({
					"Objet": newItem,
					"amount": 1
				});
			}
		});
	}

	removeItem(newItem) {
		this.#items.forEach(item => {
			if(item.Objet = newItem){
				item.amount--;
			}
			else{
				throw new Error("Ce charactère n'a déjà pas cet item");
			}
		});
	}

	displayInventory(){
		this.#items.forEach(item => {
			item.Objet.displayInfos();
			console.log("Quantité : "+ item.amount);
		});
	}
	
	get isAlive() {
		return this.hp>0;
	}

	get hpPercentage() {

	}
}