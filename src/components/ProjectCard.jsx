import "./ProjectCard.css"
import Button from "./Button"
const ProjectCard = ({ image, name, description, text, netlify, github }) => {
  return (
    <article>
      <img src={image} alt="blaha" />
      <p>{text}</p>
      <h2>{name}</h2>
      <p>{description}</p>
      <Button label="Live Demo" url={netlify} />
      <Button label="View Code" url={github} />
    </article>
  )
}

export default ProjectCard