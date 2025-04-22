import "./ProjectCard.css"
import Button from "./Button"
import Tag from "./Tag"

const ProjectCard = ({ image, tags, name, description, text, netlify, github }) => {
  return (
    <article>
      <img src={image} alt="blaha" />
      <div className="tag-wrapper">
        {tags.map((tag, index) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <Button icon="assets/Icon-Web.svg" label="Live Demo" url={netlify} />
      <Button label="View Code" url={github} />
    </article>
  )
}

export default ProjectCard