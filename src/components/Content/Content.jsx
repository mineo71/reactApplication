import React from 'react'
import Card from './card/Card'
import s from './content.module.css'

export default function Content() {
  return (
    <div className={s.content}>
      <div className={s.container}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
