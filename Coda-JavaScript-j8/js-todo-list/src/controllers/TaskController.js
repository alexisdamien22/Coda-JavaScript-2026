import { TaskManager } from "../managers/TaskManager.js";
import { TaskFormView } from "../views/TaskFormView.js";
import { TaskListView } from "../views/TaskListView.js";

export class TaskController {
    #manager;
    #views;

    constructor() {
        this.#manager = new TaskManager();

        this.#views = {
            form: new TaskFormView("#task-form", "#task-input"),
            list: new TaskListView("#task-list"),
        };

        this.#init();
    }

    #init() {
        this.#manager.on("task:added", (data) => {
            console.log(`Tâche ajoutée : ${data.task.title}`);
            this.#saveToStorage();
        });

        this.#manager.on("task:removed", (data) => {
            console.log(`Tâche supprimée : ${data.task.title}`);
            this.#saveToStorage();
        });

        this.#manager.on("task:toggled", (data) => {
            console.log(`Tâche modifiée : ${data.task.title}`);
            this.#saveToStorage();
        });

        this.#manager.on("task:updated", (data) => {
            console.log(`Tâche modifiée : ${data.task.title}`);
            this.#saveToStorage();
        });

        this.#manager.on("tasks: changed", (data) => {
            this.#updateAllViews(data.tasks);
        });

        this.#views.form.onSubmit((title) => this.#handleAddTask(title));
        this.#views.list.onToggle((id) => this.#handleToggleTask(id));
        this.#views.list.onDelete((id) => this.#handleDeleteTask(id));
        this.#views.list.onEdit((id, title) => this.#handleEditTask(id, title));

        this.#loadFromStorage();
        this.#updateAllViews();
    }

    #handleAddTask(title) {
        try {
            this.#manager.add(title);
        } catch (error) {
            console.error(error);
        }
    }

    #handleToggleTask(taskId) {
        this.#manager.toggle(taskId);
    }

    #handleDeleteTask(taskId) {
        if (confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
            try {
                this.#manager.remove(taskId);
            } catch (error) {
                alert(error.message);
            }
        }
    }

    #handleEditTask(taskId, currentTitle) {
        const newTitle = prompt(`Modifier la tâche : "${currentTitle}"`);

        if (newTitle && newTitle !== currentTitle) {
            try {
                this.#manager.update(taskId, newTitle);
            } catch (error) {
                alert(error.message);
            }
        }
    }

    #updateAllViews(tasks = this.#manager.getAll()) {
        this.#views.list.render(tasks);
    }

    #saveToStorage() {
        try {
            const json = JSON.stringify(this.#manager.getAll());
            localStorage.setItem("tasks", json);
        } catch (error) {
            console.log("Erreur de sauvegarde", error);
        }
    }

    #loadFromStorage() {
        try {
            const json = localStorage.getItem("tasks");

            if (json) {
                const data = JSON.parse(json);
                this.#manager.loadFromJSON(data);
            }
        } catch {
            console.error(error);
        }
    }
}