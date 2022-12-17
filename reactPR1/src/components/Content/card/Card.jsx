import React from 'react'
import s from './Card.module.css'

export default function Card() {
  return (
    <div className={s.card}>
      <div className={s.square}></div>
      <div className={s.content}>
        <h2>Headline Text</h2>
        <p>Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.</p>
        <p>Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.</p>
        <a href="#">Read More {'>'}{'>'}</a>
      </div>
    </div>
  )
}
