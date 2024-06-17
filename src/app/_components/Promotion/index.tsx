'use client'
import React, { useEffect, useState } from 'react'
import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 10)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const distance = Math.max(Number(targetDate) - Number(now), 0)

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTime({
        days,
        hours,
        minutes,
        seconds,
      })

      if(distance === 0) clearInterval(interval)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className={classes.promotion}>
      <div className={classes.textBox}>
        <h3 className={classes.title}>Deal of the Month</h3>
        <p>Get your best deals of the month directly at you home, at affordable prices.</p>

        <ul className={classes.stats}>
         <StatBox Label='Days' value={time.days}/> 
         <StatBox Label='Hours' value={time.hours }/> 
         <StatBox Label='Minutes' value={time.minutes}/> 
         <StatBox Label='Seconds' value={time.seconds}/> 
        </ul>
      </div>
    </section>
  )
}

const StatBox = ({ Label, value }: {Label: string, value: number}) => {
  return (
    <li className={classes.statBox}>
      <h4 className={classes.statTitle}>{value} </h4>
      <p className={classes.statValue}>{Label}</p>
    </li>
  )
}   


export default Promotion
