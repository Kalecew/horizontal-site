import s from './Advantages.module.css'
import PopupAdvantages from './PopupAdvantages/PopupAdvantages'
import {useRef} from 'react'

const Advantages = () => {
  const refPopup = useRef()
  const showPopup = () => {
    refPopup.current.classList.remove('hidden')
    document.body.setAttribute('data-no-scroll','')
  }
  return(
    <section className={s.advantages} id="advan">
      <h2 className={s.title}>
        Ключевое сообщение
        <div className={s.bigTitle}>
          Brend<b>XY</b>
        </div>
      </h2>
      <div className={s.gridContent}>
        <div className={s.longAdvantage}>
          <p>
            Ehicula ipsum a arcu 
            cursus vitae. Eu non 
            diam phasellus 
            vestibulum lorem sed 
            risus ultricies
          </p>
        </div>
        <div className={s.shortAdvantage}>
          <p>
            A arcu <br/>
            cursus vitae
          </p>
        </div>
        <button className={s.btn} type="button" onClick={showPopup}><span className="btn__text">Подробнее</span></button>
      </div>
      <div className={s.bottle}></div>
      <div className={s.bubble1}></div>
      <div className={s.bubble2}></div>
      <div className={s.bubble3}></div>
      <div className={s.bubble4}></div>
      <div className={s.bubble5}></div>
      <div className={s.bubble6}></div>
      <div className={s.bubble7}></div>
      <div className={s.bubble8}></div>
      <PopupAdvantages refPopup={refPopup}/>
    </section>
  )
}
export default Advantages