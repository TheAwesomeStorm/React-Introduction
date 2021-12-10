import React, { ChangeEvent } from 'react'
import style from './form.module.scss'
import { Button } from '../button/button'

export class Form extends React.Component {
  public state = {
    tarefa: '',
    tempo: '00:00'
  }

  render () {
    return (
      <form className={style.newTask} onSubmit={this.saveTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            type='text'
            name='task'
            id='task'
            onChange={this.setTaskState.bind(this)}
            placeholder='O que você quer estudar'
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

  private saveTask(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('state: ', this.state)
  }

  private setTaskState(event: ChangeEvent<HTMLInputElement>) {
    this.setState({...this.state, tarefa: event.target.value})
  }

  private SetTimeState(event: ChangeEvent<HTMLInputElement>) {
    this.setState({tempo: event.target.value})
  }
}