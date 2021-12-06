import React from 'react'
import './forms.scss'
import { Button } from '../button/button'

export class Forms extends React.Component {
  render () {
    return (
      <form className='newTask'>
        <div>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input type='text' name='tarefa' id='tarefa' placeholder='O que você quer estudar' required />
        </div>
        <div>
          <label htmlFor="tempo">Tempo</label>
          <input type='time' step='1' name='tempo' id='tempo' min='00:00:00' max='01:30:00' required />
        </div>
        <Button />
      </form>
    )
  }
}