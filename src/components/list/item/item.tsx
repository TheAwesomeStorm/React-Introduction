import style from './item.module.scss';
import { Task } from '../../../interfaces/task'

interface ItemProps extends Task {
  selectTask: (selectedTask: Task) => void
}

export function Item(
  {
    description,
    duration,
    selected,
    done,
    id,
    selectTask
  }: ItemProps) {

  function selectTaskOnClick() {
    !done && selectTask({description: description, duration: duration, selected, done, id})
  }

  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ''} ${done ? style.itemCompleted : ''}`}
      onClick={selectTaskOnClick}>
      <h3>{description}</h3>
      <span>{duration}</span>
      {done && <span className={style.done} aria-label='task done' />}
    </li>
  )
}