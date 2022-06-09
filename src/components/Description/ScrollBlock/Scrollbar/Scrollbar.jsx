import s from './Scrollbar.module.css'

const Scrollbar = () => (
	<div className={s.scrollbar}>
  <div className={s.track}>
        <div className={s.thumb}></div>
      </div>
    </div>
)

export default Scrollbar