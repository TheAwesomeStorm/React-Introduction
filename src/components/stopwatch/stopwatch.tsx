import style from './stopwatch.module.scss'
import { Watch } from './watch/watch'
import { Button } from '../button/button'
import { Task } from '../../interfaces/task'
import { useEffect, useState } from 'react'
import { timeToSeconds } from '../../common/utils/time-to-seconds'

interface StopwatchProps {
  selected: Task | undefined,
  completeTask: () => void
}

export function Stopwatch({ selected, completeTask }: StopwatchProps) {

  const [time, setTime] = useState<number>()

  useEffect(() => {
    if(selected?.tempo) {
      setTime(timeToSeconds(selected.tempo))
    }
  }, [selected])

  function countDown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1)
        return countDown(counter - 1)
      }
      completeTask()
    }, 1000)
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha uma tarefa e inicie o cronômetro</p>
      <div className={style.watchWrapper}>
        <Watch time={time}/>
      </div>
      <Button onClick={() => countDown(time)}>Começar!</Button>
    </div>
  )
}