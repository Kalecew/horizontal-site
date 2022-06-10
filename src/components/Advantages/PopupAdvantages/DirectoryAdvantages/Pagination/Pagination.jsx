import s from './Pagination.module.css'

const Pagination = ({countPages, currentPage, changePage}) => {
	function* renderCircle()	{
    for(let i = 1; i <= countPages; i++) {
    	if(i === currentPage) {
    		yield (
        	<li className={s.item} key={i}>
		        <button className={`${s.link}  ${s.linkCircle} ${s.linkCircleActive}`}>{i}</button>
		      </li>
		    )
    	} else {
    		yield (
        	<li className={s.item} key={i}>
		        <button className={`${s.link}  ${s.linkCircle}`} onClick={() => changePage(i)}>{i}</button>
		      </li>
		    )
    	}
    }   	
	}
	return(
		<div className={s.pagination}>
	    <ul className={s.list}>

	      <li className={s.item}>
	        <button className={`${s.link} ${s.linkPrev}`} onClick={() => changePage(currentPage - 1)}>&lt;</button>
	      </li>

	      {[...renderCircle()]}

	      <li className={s.item}>
	        <button className={`${s.link} ${s.linkNext}`} onClick={() => changePage(currentPage + 1)}>&gt;</button>
	      </li>
	    </ul>
	  </div>
	)
}

export default Pagination