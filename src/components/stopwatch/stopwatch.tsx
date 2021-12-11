import style from './stopwatch.module.scss'
import { Watch } from './watch/watch'
import { Button } from '../button/button'
import { Task } from '../../interfaces/task'
import { useEffect, useState } from 'react'
import { timeToSeconds } from '../../common/utils/time-to-seconds'

interface StopwatchProps {
  selectedTask: Task | undefined,
  completeTask: () => void
}

export function Stopwatch({ selectedTask, completeTask }: StopwatchProps) {

  const [duration, setDuration] = useState<number>()

  useEffect(() => {
    if(selectedTask?.duration) {
      setDuration(timeToSeconds(selectedTask.duration))
    }
  }, [selectedTask])

  function countDown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setDuration(counter - 1)
        return countDown(counter - 1)
      }
      completeTask()
    }, 1000)
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a task and start the stopwatch</p>
      <div className={style.watchWrapper}>
        <Watch time={duration}/>
      </div>
      <Button onClick={() => countDown(duration)}>Start</Button>
    </div>
  )
}