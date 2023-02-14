import Message from './../layout/Message'
import { useLocation } from 'react-router-dom'

import Container from '../layout/Container'


import LinkButton from '../layout/LinkButton'
import styles from './Projects.module.css'

import ProjectCard from '../project/ProjectCard'
import { useState,useEffect } from 'react'
function Projects(){
    const [projects, setProjects] = useState([])
    const [projectMessage, setProjectMessage]=useState('')
    const location = useLocation()
    let message=''
    if(location.state){
        message = location.state.message    
    }

    useEffect(()=>{
       fetch('http://localhost:5000/projects',{
        method:'GET',
        headers:{
            'Content-type':'application/json',
        },
       })
       .then( (resp) => resp.json())
       .then( (data) => {
        console.log(data)
        
        setProjects(data)
       })
       .catch((err)=>console.log(err))
    },[])

    function removeProject(id){

        fetch(`http://localhost:5000/projects/${id}`,{
            method:'DELETE',
            headers:{ 'Content-Type':'application/json'},

        }).then((resp)=>resp.json())
        .then(()=>{
            setProjects(projects.filter((project)=>project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch((err)=>console.log(err))
    }

    return(<div className={styles.projects_container}>
        <div className={styles.title_container}>

            <h1>Meus projetos</h1>
            <LinkButton className={styles.btn} to='/NewProject' text='Criar Projeto'/>
        </div>
        {message && <Message msg={message} type='sucess'/>}
        {projectMessage && <Message msg={projectMessage} type='sucess'/>}

        <Container customClass='start'>
            {projects.length>0&& projects.map((project)=>(
                <ProjectCard name={project.name}
                 id={project.id}
                  budget={project.budget}
                   category={project.category?.name}
                    key={project.id}
                    handleRemove={removeProject }
                    />
            ))}
            {/* {!removeLoading&&<Loading/>} */}
            {projects.length===0&&(<p>Não há projetos salvos</p>)}
                

        </Container>
    </div>)
}
export default Projects