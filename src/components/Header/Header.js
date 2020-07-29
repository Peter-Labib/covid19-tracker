import React from 'react'
import style from './Header.module.css'
import logo from '../../img/covid.png'

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.header__logo} src={logo} alt='logo'/>
        </header>
    )
}

export default Header
