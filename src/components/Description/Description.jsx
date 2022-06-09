import s from './Description.module.css'
import ScrollBlock from './ScrollBlock/ScrollBlock'
import {useState} from 'react'

const Description = () => {
  const [isShow, setIsShow] = useState(true)
  return(
    <section className={s.description} id="desc" {...isShow && {'data-animation' : ''}}>
      <h2 className={s.title}>
        Текст <br/>
        сообщения
      </h2>
      <ScrollBlock/>
      <div className={s.sperm1}></div>
      <div className={s.sperm2}></div>
      <div className={s.sperm3}></div>
      <div className={s.sperm4}></div>
      <div className={s.sperm5}></div>
    </section>
  )
}

export default Description

// сначала свайп
// window.addEventListener('hashchange', () => {console.log(true)})