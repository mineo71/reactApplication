import React from 'react'
import s from './footer.module.css'



 function Tweet() {
  return (
    <p className={s.tweet}>@<span>name</span> RT @<span>name</span> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque. <span className={s.time}>about 9 hours ago</span></p>
  )
}


export default function Footer() {
  return (
    <div className={s.footer}>
        <div className={s.container}>
        <div className={s.main_section}>
            <nav>
                <h2 className={s.title}>Footer Navigation</h2>
                <ul>
                    <li>Home Page</li>
                    <li>Our Services</li>
                    <li>Meet the Team</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                    <li>Gallery</li>
                    <li>Portfolio</li>
                    <li>Online Shop</li>
                </ul>
            </nav>  
            <div className={s.gallery}>
                <h2 className={s.title}>Latest Gallery</h2>
                <div className={s.photos}>
                    <div className={s.rect}></div>
                    <div className={s.rect}></div>
                    <div className={s.rect}></div>
                    <div className={s.rect}></div>
                    <div className={s.rect}></div>
                    <div className={s.rect}></div>
                    <div className={s.rect}></div>
                    <div className={s.rect}></div>
                    <div className={s.rect}></div>
                </div>
            </div>
            <div className={s.twitter}>
                <h2 className={s.title}>From Twitter</h2>
                <div className={s.tweets}>
                  <Tweet/>
                  <Tweet/>
                  <Tweet/>
                  <Tweet/>
                </div>
            </div>
            <div className={s.contact}>
              <h2 className={s.title}>Contact Us</h2>
              <div className={s.form}>
                <p>Name *</p>
                <input type="text" />
                <p className={s.email}>Email *</p>
                <input type="text" />
                <div className={s.form_txt}>
                  <input type="text" />
                  <div className={s.buttons}>
                    <button>SUBMIT</button>
                    <button className={s.reset}>RESET</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className={s.sub_section}>
          <p>Copyright © 2009 - 2022 - All Rights Reserved - Domain Name</p>
          <p>Template by OS Templates</p>
        </div>
    </div>
    </div>
  )
}
