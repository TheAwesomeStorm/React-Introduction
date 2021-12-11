import React, { ChangeEvent, useState } from 'react'
import style from './form.module.scss'
import { Button } from '../button/button'
import { Task } from '../../interfaces/task'
import { v4 as uuidv4 } from 'uuid'

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export function Form({ setTasks}: FormProps) {

  const [tarefa, setTask] = useState("")
  const [tempo, setTime] = useState("00:00")

  function addTask(event: ChangeEvent<HTMLFormElement>) {
      event.preventDefault()
      setTasks(tasks =>
        [
          ...tasks,
          {
            tarefa,
            tempo,
            selected: false,
            done: false,
            id: uuidv4()
          }
        ])
      setTask('')
      setTime('00:00')
    }

  function setTaskState(event: ChangeEvent<HTMLInputElement>) {
      setTask(event.target.value)
    }

  function SetTimeState(event: ChangeEvent<HTMLInputElement>) {
      setTime(event.target.value)
    }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type='text'
          name='task'
          id='task'
          onChange={setTaskState}
          placeholder='O que você quer estudar'
          value={tarefa}
          required />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type='time'
          step='1'
          name='time'
          id='time'
          min='00:00:00'
          max='01:30:00'
          onChange={SetTimeState}
          value={tempo}
          required />
      </div>
      <Button type={'submit'}>Adicionar</Button>
    </form>
  )
}
