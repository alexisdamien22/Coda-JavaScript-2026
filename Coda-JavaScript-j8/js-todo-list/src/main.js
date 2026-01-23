import './styles/style.css';
import { TaskController } from './controllers/TaskController.js';

document.addEventListener("DOMContentLoaded", () => {
	const app = new TaskController();

	console.log("Application initialisée");
})