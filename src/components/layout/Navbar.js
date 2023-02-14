import {Link} from 'react-router-dom'

import Container from './Container'

import Styles from './Navbar.module.css'

import logo from '../../components/logoo.png'


function Navbar(){
    return(
    <nav className={Styles.navbar}>
    <Container>
        <Link to='/'>
            <img src={logo} alt='Mat' width="300" height="200"/>
        </Link>
        
        <ul className={Styles.list}>
            <li className={Styles.item}>
            <Link to="/">Home </Link>
            </li>
            <li className={Styles.item}>
            <Link to="/Projects">Projectos </Link>
            </li>
            
            <li className={Styles.item}>
            <Link to="/Contact">Contato </Link>
            </li >
            <li className={Styles.item}><Link to="/NewProject">Novo Projeto </Link></li>

        </ul>

    </Container>
       
      </nav>
      
      )
}

export default Navbar