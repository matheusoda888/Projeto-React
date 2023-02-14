import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill, BsTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
function ProjectCard({id, name,budget,category,handleRemove}){

    const remove= (e)=>{
        e.preventDefault()
        handleRemove(id)
    }

    
    return(
        <div className={styles.project_Card}>
            <h4>{name}</h4>
            <p>
                <span>Descrição: </span>{budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category]}`}></span> {category}
            </p> 
            <div className={styles.project_Card_actions}>
                <p>
                    <Link to={`/project/${id}`}><BsPencil/>Editar</Link>
                </p>
                <button onClick={remove}>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard