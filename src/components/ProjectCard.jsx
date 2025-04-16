const ProjectCard = ({ image, name, text }) => {
  return (
    <article>
      <img src={image} alt="blaha" />
      <h2>{name}</h2>
      <p>{text}</p>
    </article>
  )
}

export default ProjectCard