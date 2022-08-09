import addUI from './modules/layout.js';
import '../css/style.css';
import Tasks from './modules/tasks.js';

addUI();
const ulTasks = document.querySelector('#ulTasks');
const TaskList = new Tasks();

ulTasks.innerHTML = TaskList.renderTasks();
