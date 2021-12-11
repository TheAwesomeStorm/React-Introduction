import React, { ChangeEvent, useState } from 'react'
import style from './form.module.scss'
import { Button } from '../button/button'
import { Task } from '../../interfaces/task'
import { v4 as uuidv4 } from 'uuid'

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export function Form({ setTasks}: FormProps) {

  const [description, setDescription] = useState("")
  const [duration, setDuration] = useState("00:00")

  function addTask(event: ChangeEvent<HTMLFormElement>) {
      event.preventDefault()
      setTasks(tasks =>
        [
          ...tasks,
          {
            description: description,
            duration: duration,
            selected: false,
            done: false,
            id: uuidv4()
          }
        ])
      setDescription('')
      setDuration('00:00')
    }

  function setDescriptionOnChange(event: ChangeEvent<HTMLInputElement>) {
      setDescription(event.target.value)
    }

  function setDurationOnChange(event: ChangeEvent<HTMLInputElement>) {
      setDuration(event.target.value)
    }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add a new study</label>
        <input
          type='text'
          name='task'
          id='task'
          onChange={setDescriptionOnChange}
          placeholder='What do you want to study?'
          value={description}
          required />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          type='time'
          step='1'
          name='time'
          id='time'
          min='00:00:00'
          max='01:30:00'
          onChange={setDurationOnChange}
          value={duration}
          required />
      </div>
      <Button type={'submit'}>Add</Button>
    </form>
  )
}
