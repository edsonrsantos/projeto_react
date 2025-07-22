import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import Styles from './estilos.module.css'


const Menu = () => {
 const location = useLocation();

 return (
<div>
<Link className={`${Styles.link} ${location.pathname === '/' ? Styles.active : ''}`}         to="/" >Home </Link>
<Link className={`${Styles.link} ${location.pathname === '/Contatos' ? Styles.active : ''}`} to="/Contatos" > Contatos </Link>
<Link className={`${Styles.link} ${location.pathname === '/Sobre' ? Styles.active : ''}`}    to="/Sobre"> Sobre </Link>
<Link className={`${Styles.link} ${location.pathname === '/Produtos' ? Styles.active : ''}`} to="/Produtos"> Produtos </Link>


</div>
  );
};

export default Menu; 