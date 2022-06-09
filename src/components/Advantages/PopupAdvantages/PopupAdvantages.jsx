const PopupAdvantages = () => (
	<div className="advantages__popup block" style={{display: "none"}}>
    <h3 className="advantages__title h2">
      Преимущества
      <span className="advantages__big-title">
        Brend<b>XY</b>
      </span>
    </h3>
    <div className="advantages__directory directory-advantages">
      <ol className="directory-advantages__list">
        <li className="directory-advantages__item">
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit
        </li>
        <li className="directory-advantages__item">
          Faucibus pulvinar elementum integer enim
        </li>
        <li className="directory-advantages__item">
          Faucibus pulvinar elementum integer enim
        </li>
      </ol>
      <div className="directory-advantages__pagination pagination">
        <ul className="pagination__list">
          <li className="pagination__item">
            <button className="pagination__link">&lt;</button>
          </li>
          <li className="pagination__item">
            <button className="pagination__link pagination__link--active">1</button>
          </li>
          <li className="pagination__item">
            <button className="pagination__link">2</button>
          </li>
          <li className="pagination__item">
            <button className="pagination__link">&gt;</button>
          </li>
        </ul>
      </div>
    </div>       
  </div>
)

export default PopupAdvantages