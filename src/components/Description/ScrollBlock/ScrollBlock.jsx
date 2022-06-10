import Scrollbar from './Scrollbar/Scrollbar'
import s from './ScrollBlock.module.css'
import {useRef, useEffect} from 'react'

const ScrollBlock = () => {
  const refTextBlock = useRef()
  const refScrollbox = useRef()

  let textBlock = null
  let scrollbox = null

  let heightTrack = null
  let heightThumb = null

  let maxScrollTopTextBlock = null
  let maxScrollboxTop = null 


  useEffect(() => {
    textBlock = refTextBlock.current
    scrollbox = refScrollbox.current

    heightTrack = scrollbox.parentElement.clientHeight
    heightThumb = scrollbox.offsetHeight

    maxScrollTopTextBlock = textBlock.scrollHeight - textBlock.offsetHeight
    maxScrollboxTop = heightTrack - heightThumb
  })

  
  



  let yDown = null  

  const handleTouchStartScrollbar = (e) => {
    yDown = +e.changedTouches[0].clientY;
  }

  const handleTouchMoveScrollbar = (e) => {    
    const yUp = +e.changedTouches[0].clientY;
    const yDiff = yUp - yDown;
    if (0 <= yDiff && ((yDiff + heightThumb) <= heightTrack)) {
      scrollbox.style.top = yDiff + "px"      
      const percentScroll = yDiff/heightTrack
      textBlock.scrollTop = maxScrollTopTextBlock * percentScroll
    } 
  }

  const handleTouchStartTextblock = (e) => {
    yDown = +e.changedTouches[0].clientY;
  }

  const handleTouchMoveTextblock = (e) => {
    const percentScroll = textBlock.scrollTop/maxScrollTopTextBlock
    scrollbox.style.top = maxScrollboxTop*percentScroll + "px"
  }

  return(
    <div className={s.scrollBlock}>
      <Scrollbar handleTouchStart={handleTouchStartScrollbar} handleTouchMove={handleTouchMoveScrollbar} refScrollbox={refScrollbox} />
      <div className={s.textBlock} ref={refTextBlock}  onTouchStart={handleTouchStartTextblock} onTouchMove={handleTouchMoveTextblock}>
        <p><b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
          Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi 
          tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget 
          felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam 
          dignissim diam quis enim lobortis. Est sit amet facilisis magna. <br/>
          Neque laoreet suspendisse interdum consectetur libero id. <br/>
          Nec ullamcorper sit amet risus nullam eget felis eget. <br/>
          Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. <br/>
          Euismod quis viverra nibh cras pulvinar mattis nunc. <br/>
          Massa massa ultricies mi quis. Sit amet massa vitae tortor 
          condimentum lacinia. Et malesuada fames ac turpis egestas <br/>
          integer eget. Elementum pulvinar etiam non quam lacus suspendisse 
          faucibus interdum posuere.
        </p>
        <p>
          Amet justo donec enim diam vulputate ut pharetra sit. 
          Risus ultricies tristique nulla aliquet enim tortor at auctor. 
          Velit sed ullamcorper morbi tincidunt ornare massa. 
          Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim 
          diam quis enim. Gravida neque convallis a cras. Ut enim blandit 
          volutpat maecenas volutpat. Mauris sit amet massa vitae tortor 
          condimentum lacinia quis vel.
        </p>
      </div>
    </div>
  )
}

export default ScrollBlock