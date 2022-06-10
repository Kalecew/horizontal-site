import s from './DirectoryAdvantages.module.css'
import Pagination from './Pagination/Pagination'
import {useState} from 'react'

const DirectoryAdvantages = () => {
	const dataAdvantages = [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		"Faucibus pulvinar elementum integer enim",
		"Faucibus pulvinar elementum integer enim",
		"Mi bibendum neque egestas congue quisque egestas diam",
		"Venenatis lectus magna fringilla urna",
		"Venenatis lectus magna fringilla urna",
	]
	const countOnPage = 3
	const [currentPage, setCurrentPage] = useState(1)
	const countPages = Math.ceil(dataAdvantages.length / 3)
	const changePage = (i) => {
		if (1 <= i && i <= countPages){
			setCurrentPage(i)
		}		
	}
	function* renderAdv()	{
    for(let i = countOnPage * (currentPage - 1); i < countOnPage * currentPage; i++)
        yield <li className={s.item} key={i} counter={'0'+(i+1)}> {dataAdvantages[i]} </li>
	}
	return(
		<div className={s.directoryAdvantages}>
	    <ol className={s.list}>
	    	{[...renderAdv()]}
	    </ol>
	    <Pagination countPages={countPages} currentPage={currentPage} changePage={changePage}/>
	  </div>       
	)
}

export default DirectoryAdvantages