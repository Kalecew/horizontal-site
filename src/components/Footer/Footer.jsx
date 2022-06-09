import s from './Footer.module.css'

const Footer = () => (
  <footer className={s.footer}>
    <img className={s.logo} src={process.env.PUBLIC_URL + '/img/logo.png'} alt="onpoint" width="114" height="24"/>
  </footer>
)

export default Footer