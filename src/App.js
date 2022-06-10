import s from './App.module.css'
import Header from './components/Header/Header'
import Cover from './components/Cover/Cover'
import Description from './components/Description/Description'
import Advantages from './components/Advantages/Advantages'
import Footer from './components/Footer/Footer'
import useEvent from './eventsHandlers/useEvent'
import {handleTouchStart, handleTouchMove} from './eventsHandlers/handleTouch'

function App() {
  useEvent('touchstart', handleTouchStart)
  useEvent('touchmove', handleTouchMove)
  return (
    <div className={s.app}>
      <Header/>
      <div className={s.content}>
        <Cover/>
        <Description/>
        <Advantages/>
      </div>      
      <Footer /> 
    </div>
  )
}

export default App
