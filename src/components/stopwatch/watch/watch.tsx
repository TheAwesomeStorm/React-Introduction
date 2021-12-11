import style from './watch.module.scss'

interface WatchProps {
  time: number | undefined
}

export function Watch({ time = 0 }: WatchProps) {

  const minute = Math.floor(time / 60)
  const second = time % 60
  const [minuteTen, minuteUn] = String(minute).padStart(2,'0')
  const [secondTen, secondUn] = String(second).padStart(2,'0')

  return (
    <>
      <span className={style.watchNumber}>{minuteTen}</span>
      <span className={style.watchNumber}>{minuteUn}</span>
      <span className={style.watchColon}>:</span>
      <span className={style.watchNumber}>{secondTen}</span>
      <span className={style.watchNumber}>{secondUn}</span>
    </>
  )
}