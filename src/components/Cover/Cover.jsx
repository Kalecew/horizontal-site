import s from './Cover.module.css'

const Cover = () => (
  <section className={s.cover} id="first">
    <h2 className={s.title}>
      Привет, 
      <div className={s.bigTitle}>
        это <b>не</b> коммерческое задание
        <a className={s.btn} href="#desc">
          <span className="btn__text">Что дальше?</span>
        </a>
        <div className={s.pinkSperm}></div>
      </div>      
    </h2>    
    <div className={s.ovule1}></div>
    <div className={s.ovule2}></div>
    <div className={s.ovule3}></div>
    <div className={s.ovule4}></div>
  </section>
)

export default Cover