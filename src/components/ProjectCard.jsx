import "./ProjectCard.css"
import Button from "./Button"
import Tag from "./Tag"
import HeadingMedium from "../typography/HeadingsMedium"

const ProjectCard = ({ image, tags, name, description, netlify, github }) => {
  return (
    <article>
      <img src={image} alt="blaha" />
      <div>
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <HeadingMedium title={name} />
      <p>{description}</p>
      <Button icon="/assets/globe-icon.svg" label="Live Demo" url={netlify} />
      <Button icon="/assets/github.svg" label="View Code" url={github} />
    </article>
  )
}

export default ProjectCard