import React from 'react'
import style from './button.module.scss'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined,
  onClick?: () => void,
  children?: React.ReactNode
}

export function Button({ type, onClick, children }: ButtonProps) {
  return (
    <button onClick={onClick} type={type} className={style.btn}>
      {children}
    </button>
  )
}
