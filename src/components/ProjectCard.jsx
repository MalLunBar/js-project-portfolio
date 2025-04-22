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
      <Button icon="/assets/globe-icon.svg" label="Live Demo" url={netlify} />
      <Button icon="/assets/github.svg" label="View Code" url={github} />
    </article>
  )
}

export default ProjectCard