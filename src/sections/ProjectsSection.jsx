import ProjectCard from "../components/ProjectCard"

const ProjectSection = () => {
  return (
    <>
      {projects.map((project) => {
        return (
          <ProjectCard
            image={project.image}
            name={project.name}
            text={project.tags.join(", ")}
          />
        )
      })}

    </>
  )
}


export default ProjectSection