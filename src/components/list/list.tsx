import React, { useState } from 'react'
import style from './list.module.scss'
import { Item } from './item/item'

export function List() {
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

  function AddTask() {
    setTasks([...tasks, {tarefa: 'Estudar state', tempo: '05:00:00'}])
  }

  return (
    <aside className={style.taskList}>
      <h2 onClick={AddTask}>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  )
}