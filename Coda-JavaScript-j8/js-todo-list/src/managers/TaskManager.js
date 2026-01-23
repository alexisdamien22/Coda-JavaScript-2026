import { EventEmitter } from "../utils/EventEmitter";
import { Task } from "../models/Task";

export class TaskManager extends EventEmitter {
    #tasks;

    constructor() {
        super();
        this.#tasks = [];
    }

    add(taskTitle) {
        const newTask = new Task(taskTitle);
        this.#tasks.push(newTask);
        this.emit("task:added", { task: newTask });
        this.emit("task:changed", { tasks: [] });

        return newTask;
    }

    remove(taskId) {
        const taskIndex = this.#tasks.findIndex((task) => task.id === taskId);

        if (taskIndex !== -1) {
            const removedTask = this.#tasks[taskIndex];
            this.#tasks.splice(taskIndex, 1);
            this.emit("task:removed", { task: removedTask });
            this.emit("tasks:changed", { tasks: this.getAll() });

            return true;
        }

        return false;
    }

    toggle(taskId) {
        const taskIndex = this.#tasks.findIndex((task) => task.id === taskId);

        if (taskIndex !== -1) {
            this.#tasks[taskIndex].toggle();
            this.emit("task:toggled", { task: this.getById(taskId) });
            this.emit("tasks:changed", { tasks: this.getAll() });

            return true;
        }

        return false;
    }

    update(taskId, newTitle) {
        const task = this.getById(taskId);

        if (task) {
            task.updateTitle(newTitle);
            this.emit("task:updated", { task });
            this.emit("tasks:changed", { tasks: this.getAll() });

            return true;
        }

        return false;
    }

    loadFromJSON(jsonTasks) {
        this.#tasks = jsonTasks.map((jsonTask) => this.#tasks.fromJSON(jsonTask));
        this.emit("task:loaded", { tasks: this.getAllToJSON() });
        this.emit("task:changed", { tasks: this.getAllToJSON() });
    }

    getById(taskId) {
        return this.#tasks.findLast((task) => task.id === taskId);
    }

    getAll() {
        return this.#tasks.map((task) => task.toJSON());
    }

    getStats() {
        const completedAmount = this.#tasks.filter((task) => task.completed === "true").length;
        const activeAmount = 1;
        return this.emit("stats:display", {
            total: this.#tasks.length,
            completedAmount: completedAmount,
            activeAmount: activeAmount,
            completionPercentage: completionPercentage,
        });
    }
}