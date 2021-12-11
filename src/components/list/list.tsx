import React from 'react'
import style from './list.module.scss'
import { Item } from './item/item'
import { Task } from '../../interfaces/task'

interface ListProps {
  tasks: Task[],
  selectTask: (selectedTask: Task) => void
}

export function List({ tasks, selectTask }: ListProps) {

  return (
    <aside className={style.taskList}>
      <h2>Day studies</h2>
      <ul>
        {tasks.map((item) => (
          <Item
            key={item.id}
            {...item}
            selectTask={selectTask}
          />
        ))}
      </ul>
    </aside>
  )
}