
import projects from "../data/projects.json"
import { ProjectCard } from "../components/ProjectCard"
import Heading from "../typography/Heading"
import { StyledCardSection } from "./StyledSection"
import { lightTheme } from "../theme"
import { CenteredButton } from "../components/Button"
import { useState } from "react"

const projectList = projects.projects

const ProjectSection = () => {
  const [visibleCount, setVisibleCount] = useState(4)

  const handleShowMore = () => {
    setVisibleCount((c) => Math.min(c + 4, projectList.length))
  }

  const remaining = projectList.length - visibleCount

  return (
    <StyledCardSection>
      <Heading title="Featured Projects" />
      {projectList.slice(0, visibleCount).map((project, index) => {
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
        label="See More Projects"
        url=""
        background={lightTheme.background}
        text={lightTheme.text}
        border={`2px solid ${lightTheme.text}`}
        onLoadMore={handleShowMore}
        remaining={remaining}
      />

    </StyledCardSection>
  )
}

export default ProjectSection