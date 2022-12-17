import React from 'react'
import s from './articles.module.css'


export default function Articles() {
  return (
    <div className={s.articles}>
      <div className={s.container}>
        <Text/>
        <div className={s.rect}></div>
        <div className={s.rect}></div>
        <Text/>
      </div>
    </div>
  )

    function Text() {
        return <div className={s.text}>
            <h2>Headline Text</h2>
            <p>Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.</p>
            <p>Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.</p>
            <p>Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet condimentumst phasellentes dolor ut a ipsum id consectetus.</p>
        </div>
    }
}
