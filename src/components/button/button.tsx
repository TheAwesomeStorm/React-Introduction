import React from 'react'
import style from './button.module.scss'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined,
  onClick?: () => void
}

export class Button extends React.Component<ButtonProps> {
  render() {
    const { type = 'button', onClick } = this.props
    return (
      <button onClick={onClick} type={type} className={style.btn}>
        {this.props.children}
      </button>
    )
  }
}