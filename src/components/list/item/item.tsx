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

  function selectTaskOnClick() {
    !done && selectTask({tarefa, tempo, selected, done, id})
  }

  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ''} ${done ? style.itemCompleted : ''}`}
      onClick={selectTaskOnClick}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {done && <span className={style.done} aria-label='task done' />}
    </li>
  )
}