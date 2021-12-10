import React from 'react'
import style from './button.module.scss'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined
}

export class Button extends React.Component<ButtonProps> {
  render() {
    const { type = 'button' } = this.props
    return (
      <button type={type} className={style.btn}>
        {this.props.children}
      </button>
    )
  }
}