import style from './stopwatch.module.scss'
import { Watch } from './watch/watch'
import { Button } from '../button/button'

export function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha uma tarefa e inicie o cronômetro</p>
      <div className={style.watchWrapper}>
        <Watch />
      </div>
      <Button>Começar!</Button>
    </div>
  )
}