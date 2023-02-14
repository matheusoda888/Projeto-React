import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import {useNavigate} from 'react-router-dom'
function NewProject(){

        const navigate =useNavigate()

    function createPost(project){
        project.cost = 0
        project.services =[]

        fetch("http://localhost:5000/projects",{
            method:'POST',
            headers:{
                'Content-type': 'application/json',
            },body: JSON.stringify(project)
        }).then((resp)=>resp.json())
        .then((data)=>{
            console.log(data)
            //redirect
            navigate('/projects',{state:{message: 'Projeto criado com sucesso'}})
        })
        .catch((err)=> console.log(err))
    }
    return(<div className={styles.newProject_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu Projeto</p>
        <ProjectForm handleSubmit={createPost} btnText='Criar novo projeto'/>

    </div>)
}
export default NewProject