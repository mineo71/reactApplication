import React from 'react'
import s from './header.module.css'

export default function Header() {
  return (
    
    <div className={s.header}>
        <div className={s.container}>
            <div className={s.title}>
                <h2>RS-1200 Prototype 35</h2>
                <p>Free Responsive Template</p>
            </div>
            <div className={s.contacts}>
                <div className={s.email}>
                    <img src="./icons/mail.svg" alt="" />
                    <p>info@domain.com</p>
                </div>
                <div className={s.line}>|</div>
                <div className={s.num}>
                    <img src="./icons/call.svg" alt="" />
                    <p>+xx xxx xxxxxxxxxx</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}
