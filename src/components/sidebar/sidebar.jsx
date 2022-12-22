import React from 'react'
import s from './sidebar.module.css'

import email from './email.svg'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import linkedin from './linkedin.svg'
import twitter from './twitter.svg'
import { NavLink } from 'react-router-dom'


export default function Sidebar() {
  return (
    <div  className={s.sidebar}>
      <NavLink to={'/'}><h2>Milton</h2></NavLink>
      <div className={s.line}></div>
      <p>Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.</p>
      <div className={s.line}></div>
      <ul className={s.menu}>
        <NavLink to={'/'}><li>Home</li></NavLink>
        <NavLink to={'/about'}><li>About</li></NavLink>
        <NavLink to={'/contact'}><li>Contact</li></NavLink>
      </ul>
      <div className={s.line}></div>
      <ul className={s.icons}>
        <li><img src={facebook} alt="" /></li>
        <li><img src={instagram} alt="" /></li>
        <li><img src={twitter} alt="" /></li>
        <li><img src={linkedin} alt="" /></li>
        <NavLink to={'/contact'}><li><img src={email} alt="" /></li></NavLink> 
      </ul>
      <p className={s.webflow}>built with <span>webflow</span></p>
    </div>
  )
}
