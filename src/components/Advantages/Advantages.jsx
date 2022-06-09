const Advantages = () => (
  <section className="advantages" id="advan">
    <h2 className="advantages__title h2">
      Ключевое сообщение
      <span className="advantages__big-title">
        Brend<b>XY</b>
      </span>
    </h2>
    <div className="advantages__content">
      <div className="advantages__long">
        <p>
          Ehicula ipsum a arcu 
          cursus vitae. Eu non 
          diam phasellus 
          vestibulum lorem sed 
          risus ultricies
        </p>
      </div>
      <div className="advantages__short">
        <p>
          A arcu 
          cursus vitae
        </p>
      </div>
      <button className="advantages__btn btn" type="button">Подробнее</button>
    </div>
    <div className="advantages__popup block">
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
  </section>
)

export default Advantages