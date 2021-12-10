import React, { useState } from 'react'
import style from './app.module.scss'
import { Form } from '../components/forms/form'
import { List } from '../components/list/list'
import { Stopwatch } from '../components/stopwatch/stopwatch'

function App() {

  const [tasks, setTasks] = useState([{
    tarefa: 'Angular',
    tempo: '02:00:00'
  }, {
    tarefa: 'React',
    tempo: '01:00:00'
  }, {
    tarefa: 'TypeScript',
    tempo: '00:00:30'
  }])

  return (
    <div className={style.App}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
