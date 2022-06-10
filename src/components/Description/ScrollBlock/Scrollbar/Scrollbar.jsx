import s from './Scrollbar.module.css'

const Scrollbar = ({handleTouchStart, handleTouchMove, refScrollbox}) => {
  return(
  	<div className={s.scrollbar}>
      <div className={s.track}>
        <div className={s.thumb} style={{top: "0px"}} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} ref={refScrollbox}></div>
      </div>
    </div>    
  )
}

export default Scrollbar