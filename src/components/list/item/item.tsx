import style from './item.module.scss';
import { Task } from '../../../interfaces/task'

interface ItemProps extends Task {
  selectTask: (selectedTask: Task) => void
}

export function Item(
  {
    tarefa,
    tempo,
    selected,
    done,
    id,
    selectTask
  }: ItemProps) {

  function teste() {
    selectTask({tarefa, tempo, selected, done, id})
  }

  return (
    <li className={`${style.item} ${selected ? style.itemSelected : ''}`} onClick={teste}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}