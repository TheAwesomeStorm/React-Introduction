import React from 'react'
import style from './list.module.scss'
import { Item } from './item/item'

export function List() {
  const tasks = [{
    tarefa: 'Angular',
    tempo: '02:00:00'
  }, {
    tarefa: 'React',
    tempo: '01:00:00'
  }, {
    tarefa: 'TypeScript',
    tempo: '00:00:30'
  }]

  return (
    <aside className={style.taskList}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  )
}