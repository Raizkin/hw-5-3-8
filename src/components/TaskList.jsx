import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

class TaskList extends React.Component {
  static tasks = [
    { id: 1, text: 'Вивчити класові компоненти React' },
    { id: 2, text: 'Додати завдання до списку' },
    { id: 3, text: 'Перевірити видалення завдань' },
  ];

  taskInputRef = React.createRef();

  addTask = (event) => {
    event.preventDefault();

    const text = this.taskInputRef.current.value.trim();

    if (!text) {
      return;
    }

    TaskList.tasks.push({
      id: Date.now(),
      text,
    });

    this.taskInputRef.current.value = '';
    this.forceUpdate();
  };

  deleteTask = (taskId) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== taskId);
    this.forceUpdate();
  };

  render() {
    return (
      <section className="task-list">
        <header className="task-list__header">
          <p className="task-list__eyebrow">React</p>
          <h1>Список завдань</h1>
        </header>

        <form className="task-form" onSubmit={this.addTask}>
          <input
            ref={this.taskInputRef}
            type="text"
            placeholder="Нове завдання"
            aria-label="Текст нового завдання"
          />
          <button type="submit" className="task-form__button" aria-label="Додати завдання">
            <Plus size={18} aria-hidden="true" />
            <span>Додати</span>
          </button>
        </form>

        {TaskList.tasks.length > 0 ? (
          <ul className="tasks" aria-label="Список завдань">
            {TaskList.tasks.map((task) => (
              <li className="tasks__item" key={task.id}>
                <span>{task.text}</span>
                <button
                  type="button"
                  className="tasks__delete"
                  onClick={() => this.deleteTask(task.id)}
                  aria-label={`Видалити завдання: ${task.text}`}
                >
                  <Trash2 size={18} aria-hidden="true" />
                  <span>Видалити</span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="task-list__empty">Завдань поки немає.</p>
        )}
      </section>
    );
  }
}

export default TaskList;
