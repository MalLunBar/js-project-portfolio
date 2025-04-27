
import projects from "../data/projects.json"
import { ProjectCard } from "../components/ProjectCard"
import Heading from "../typography/Heading"
import { StyledCardSection } from "./StyledSection"
import { lightTheme, darkTheme } from "../theme"
import { CenteredButton } from "../components/Button"




const ProjectSection = () => {
  return (
    <StyledCardSection>
      <Heading title="Featured Projects" />
      {projects.projects.map((project, index) => {
        return (
          <ProjectCard
            key={project.name}
            image={project.image}
            name={project.name}
            description={project.description}
            tags={project.tags}
            netlify={project.netlify}
            github={project.github}
            index={index}

          />
        )
      })}
      <CenteredButton
        icon="/assets/arrowdown-icon.svg"
        label="Se More Projects"
        url=""
        background={lightTheme.background}
        text={lightTheme.text}
        border={`2px solid ${lightTheme.text}`} />

    </StyledCardSection>
  )
}


export default ProjectSection