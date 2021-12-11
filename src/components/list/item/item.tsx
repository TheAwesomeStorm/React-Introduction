import style from './item.module.scss';
import { Task } from '../../../interfaces/task'

interface ItemProps extends Task {
  selectTask: (selectedTask: Task) => void
}

export function Item(
  {
    task,
    time,
    selected,
    done,
    id,
    selectTask
  }: ItemProps) {

  function selectTaskOnClick() {
    !done && selectTask({task: task, time: time, selected, done, id})
  }

  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ''} ${done ? style.itemCompleted : ''}`}
      onClick={selectTaskOnClick}>
      <h3>{task}</h3>
      <span>{time}</span>
      {done && <span className={style.done} aria-label='task done' />}
    </li>
  )
}