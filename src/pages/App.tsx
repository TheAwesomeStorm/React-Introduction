import React, { useState } from 'react'
import style from './app.module.scss'
import { Form } from '../components/forms/form'
import { List } from '../components/list/list'
import { Stopwatch } from '../components/stopwatch/stopwatch'
import { Task } from '../interfaces/task'

function App() {

  const [tasks, setTasks] = useState<Task[] | []>([])
  const [selected, setSelected] = useState<Task>()

  function selectTask(selectedTask: Task) {
    setSelected(selectedTask)
    setTasks(tasks => tasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id
    })))
  }

  function completeTask() {
    if (selected) {
      setSelected(undefined)
      setTasks(tasks => tasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            done: true
          }
        }
        return task
      }))
    }
  }

  return (
    <div className={style.App}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Stopwatch selected={selected} completeTask={completeTask} />
    </div>
  );
}

export default App;
