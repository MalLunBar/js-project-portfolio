import "./ProjectSection.css"
import projects from "../data/projects.json"
import ProjectCard from "../components/ProjectCard"


const ProjectSection = () => {
  return (
    <>
      {projects.projects.map((project) => {
        return (
          <ProjectCard
            key={project.name}
            image={project.image}
            name={project.name}
            description={project.description}
            text={project.tags.join(", ")}
            netlify={project.netlify}
            github={project.github}
            
          />
        )
      })}

    </>
  )
}


export default ProjectSection