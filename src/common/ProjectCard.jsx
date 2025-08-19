import React from 'react'

function ProjectCard({src , link , projectName , projectDetails}) {
  return (
    <a href={link} target='_blank' > 
            <img className='hover' src={src} alt={`${projectName} Logo`} />
            <h3>{projectName}</h3>
            <p>{projectDetails}</p>
        </a>
  )
}

export default ProjectCard