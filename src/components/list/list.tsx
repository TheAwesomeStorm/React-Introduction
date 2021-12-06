import React from 'react'
import './list.scss'

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
    <aside className='taskList'>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className='item'>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}