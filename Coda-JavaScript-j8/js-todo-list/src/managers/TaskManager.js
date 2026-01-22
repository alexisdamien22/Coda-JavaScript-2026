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
        const taskToDelete = this.getById(taskId);

        if (taskToDelete) {
            this.#tasks = this.#tasks.filter((task) => task.id !== taskId);
            this.emit("task:removed", { tasks: this.getAll() });
        }
    }

    Toggle(taskId) {
        const taskToToggle = this.getById(taskId);

        if (taskToToggle) {
            taskToToggle.toggle();
            this.emit("task:toggled", { tasks: taskToToggle() });
            this.emit("task:changed", { tasks: this.getAll() });
        }
    }

    update(taskId, newTitle) {
        const taskToUpdate = this.getById(taskId);

        if (taskToUpdate) {
            taskToUpdate.newTitle(newTitle);
            this.emit("task:updated", { tasks: taskToUpdate() });
            this.emit("task:changed", { tasks: this.getAll() });

            return true;
        }

        return false;
    }

    loadFromJSON(jsonTasks) {
        this.#tasks = jsonTasks.map((jsonTask) => Task.fromJSON(jsonTask));
    }
    
    getAll() {
        return this.#tasks.map((task) => task.toJSON())
    }

    getById(taskId) {
        return this.#tasks.findLast((task) => task.id === taskId);
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