class Tasks {
  tasks = [
    {
      discription: 'Add more two section to your portofolio',
      completed: false,
      index: 1,
    },
    {
      discription: 'Wash the dishes',
      completed: false,
      index: 2,
    },
  ];

  renderTasks() {
    return this.tasks
      .sort((a, b) => a.index - b.index)
      .map(
        (ele, ind) => `<li class="task-item" id="task ${ind}">
                <input type="checkbox" id="check${ind}" ${ele.completed && 'checked'} >
                <div class="task-edit" >
                <textarea maxlength="255" rows="1">${ele.discription}</textarea>
                </div>
                <span>&#8230;</span>
                </li>
            `,
      )
      .join('');
  }
}

export default Tasks;
