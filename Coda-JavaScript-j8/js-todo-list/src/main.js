import './style.css';
import { Task } from './models/Task.js';

const tache1json = {
  title: "Première tâche",
};

const tache1 = Task.fromJSON(tache1json);
console.log(tache1.completed);
tache1.toggle();
console.log(tache1.completed);
console.log(tache1.toJSON())


