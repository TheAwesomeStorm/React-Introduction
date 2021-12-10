import React, { useState } from 'react'
import style from './app.module.scss'
import { Form } from '../components/forms/form'
import { List } from '../components/list/list'
import { Stopwatch } from '../components/stopwatch/stopwatch'
import { Task } from '../interfaces/task'

function App() {

  const [tasks, setTasks] = useState<Task[] | []>([])

  return (
    <div className={style.App}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
