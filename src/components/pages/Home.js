
import styles from './Home.module.css'
import reactlogo from './../../../src/logo192.png'
import LinkButton from '../layout/LinkButton'
function Home(){
    return(
    
    
    <section className={styles.home_container}>
        <h1> Projeto <span>React.JS</span>  </h1>
        <LinkButton className={styles.btn} to='/NewProject' text='Criar Projeto'/>
        
        <img src={reactlogo}/>
    </section>
    
    )
}
export default Home