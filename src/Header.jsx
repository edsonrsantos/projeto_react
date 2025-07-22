import React from 'react'
import Styles from './estilos.module.css'
import {Link} from 'react-router-dom'
import Menu from './menu'

const Header = () => {
  return (
    
    <div className={Styles.header}>
         <Menu />
         <h2></h2>
         
     </div>
   
  )
}
export default Header
