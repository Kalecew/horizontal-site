import s from './App.module.css'
import Header from './components/Header/Header'
import Cover from './components/Cover/Cover'
import Description from './components/Description/Description'
import Advantages from './components/Advantages/Advantages'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className={s.app}>
      <Header/>
      <Cover/>
      <Description />
      <Advantages />
      <Footer /> 
    </div>
  )
}

export default App