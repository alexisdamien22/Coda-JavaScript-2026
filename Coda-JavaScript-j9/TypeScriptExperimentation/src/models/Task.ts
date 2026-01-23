interface TaskData {
    id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
}

export class Task {
    #id;
    #title;
    #completed;
    #createdAt;

    constructor(title: string, id: string = crypto.randomUUID(), completed: boolean = false, createdAt: Date = new Date()) {
        if(title.trim() === ""){
            throw new Error("Le titre doit être une chaîne de caractères non vide");
        }

        this.#id = id;
        this.#title = title.trim();
        this.#completed = completed;
        this.#createdAt = createdAt;
    }

    get id(): string {
        return this.#id;
    }

    get title(): string {
        return this.#title;
    }

    get completed(): boolean {
        return this.#completed;
    }

    get createdAt(): Date {
        return this.#createdAt;
    }

    toggle(): void {
        this.#completed = !this.#completed;
    }

    toJSON(): TaskData {
        return {
            id: this.#id,
            title: this.#title,
            completed: this.#completed,
            createdAt: this.#createdAt,
        };
    }

    static fromJSON(json: TaskData): Task{
        return new Task(json.title, json.id, json.completed, json.createdAt);
    }

    updateTitle(title:string) {
        if(title.trim() === ""){
            throw new Error("Le titre doit être une chaîne de caractères non vide");
        }
        this.#title = title.trim();
    }
}