import React from 'react'
import style from './list.module.scss'
import { Item } from './item/item'
import { Task } from '../../interfaces/task'

export function List({ tasks }: {tasks: Task[]}) {

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