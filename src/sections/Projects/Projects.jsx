import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import AlgoAnimate from '../../assets/AlgoAnimate.png'
import PassVaultPro from '../../assets/PassVaultPro.png'

import portfolio from "../../assets/Screenshot 2024-07-28 at 11.47.08 AM.png"
import PackersMovers from "../../assets/Packers&Movers.jpg";

import pythProj from '../../assets/Python Logo.png';

function Projects() {
  return (
   <section id='projects' className={styles.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={styles.projectsContainer}>

        <ProjectCard 
        src = {AlgoAnimate}
       link={'https://github.com/raman-nema/DSA-Sorting-Visualizer'}
        projectName={'AlgoAnimate'}
        projectDetails={'A Sorting Algorithm Visualizer'}
        /> 

        <ProjectCard 
        src = {PassVaultPro}
       link={'https://github.com/raman-nema/PassVaultPro'}
        projectName={'PassVaultPro'}
        projectDetails={'A Password Manager'}
        /> 


        <ProjectCard 
        src = {PackersMovers}
        link={'https://github.com/nraman2045/Packers-Movers'}
        projectName={'Packers&Movers'}
        projectDetails={'A Moving Company Website'}
        /> 

        <ProjectCard 
        src = {pythProj}
        link={'https://github.com/nraman2045/Python_Projects'}
        projectName={'Projects'}
        projectDetails={'Python Projects'}
        />  

       <ProjectCard 
        src = {portfolio}
       link={'https://ramannemaportfolio.netlify.app'}
        projectName={'Portfolio'}
        projectDetails={'My Portfolio'}
        /> 
 

    </div>
   </section>
  )
}

export default Projects