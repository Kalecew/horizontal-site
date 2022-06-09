import s from './Header.module.css'

const Header = () => (
    <header className={s.header}>
        <a className={s.nav} href="#first">В начало</a>
        <h1 className={s.title}>Project</h1>
    </header>
)

export default Header