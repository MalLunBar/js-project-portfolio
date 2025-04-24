
import projects from "../data/projects.json"
import ProjectCard from "../components/ProjectCard"
import Heading from "../typography/Heading"
import StyledSection from "./StyledSection"



const ProjectSection = () => {
  return (
    <StyledSection>
      <Heading title="Featured Projects" />
      {projects.projects.map((project) => {
        return (
          <ProjectCard
            key={project.name}
            image={project.image}
            name={project.name}
            description={project.description}
            tags={project.tags}
            netlify={project.netlify}
            github={project.github}

          />
        )
      })}

    </StyledSection>
  )
}


export default ProjectSection