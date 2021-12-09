import React from 'react'
import style from './button.module.scss'

export class Button extends React.Component {
  render() {
    return (
      <button className={style.btn}>
        {this.props.children}
      </button>
    )
  }
}