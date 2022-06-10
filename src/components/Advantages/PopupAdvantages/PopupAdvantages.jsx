import s from './PopupAdvantages.module.css'
import DirectoryAdvantages from './DirectoryAdvantages/DirectoryAdvantages'
const PopupAdvantages = ({refPopup}) => {
  const closePopup = (e) => {
    const data = e.target.dataset
    if (data.overlay || data.close ){
      refPopup.current.classList.add('hidden')
      document.body.removeAttribute('data-no-scroll')
    }    
  }
  return(
  	<div className={s.popupAdvantages+" hidden"} ref={refPopup}>
      <div className={s.overlay}  onClick={closePopup} data-overlay>
        <div className={s.window}>
          <h3 className={s.title}>
            Преимущества
            <div className={s.bigTitle}>
              Brend<b>XY</b>
            </div>
          </h3>
          <DirectoryAdvantages/>
          <button className={s.closeBtn} type="button" onClick={closePopup} data-close>Close</button>
        </div>
      </div>       
    </div>
  )
}

export default PopupAdvantages