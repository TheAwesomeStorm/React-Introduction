import React, { ChangeEvent } from 'react'
import style from './form.module.scss'
import { Button } from '../button/button'
import { Task } from '../../interfaces/task'

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export class Form extends React.Component<FormProps> {
  public state = {
    tarefa: '',
    tempo: '00:00'
  }

  render () {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            type='text'
            name='task'
            id='task'
            onChange={this.setTaskState.bind(this)}
            placeholder='O que você quer estudar'
            value={this.state.tarefa}
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
            onChange={this.SetTimeState.bind(this)}
            value={this.state.tempo}
            required />
        </div>
        <Button type={'submit'}>Adicionar</Button>
      </form>
    )
  }

  private addTask(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    this.props.setTasks(tasks => [...tasks, {...this.state}])
    this.setState({
      tarefa: '',
      tempo: '00:00'
    })
  }

  private setTaskState(event: ChangeEvent<HTMLInputElement>) {
    this.setState({...this.state, tarefa: event.target.value})
  }

  private SetTimeState(event: ChangeEvent<HTMLInputElement>) {
    this.setState({tempo: event.target.value})
  }
}