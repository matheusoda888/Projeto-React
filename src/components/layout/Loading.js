import styles from './Loading.module.css'
import loading from '../../loading.svg'

function Loading(){

    return(
    <div className={styles.loader_container}>
        <img className={styles.loading} src={loading} alt='Loading'/>
    </div>
    )

}

export default Loading