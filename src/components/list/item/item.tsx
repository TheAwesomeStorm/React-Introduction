import style from './item.module.scss';
import { Task } from '../../../interfaces/task'

export function Item({tarefa, tempo, selected, done, id}: Task) {
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}