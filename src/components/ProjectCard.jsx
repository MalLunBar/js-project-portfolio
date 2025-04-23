import "./ProjectCard.css"
import Button from "./Button"
import Tag from "./Tag"
import HeadingMedium from "../typography/HeadingsMedium"
import styled from "styled-components"


const ProjectCardStyle = styled.article`
  display: flex; 
  flex-direction: column; 
  gap: 32px; 
`
const CardTextStyle = styled.div`
  display: flex; 
  flex-direction: column; 
  gap: 16px; 
`
const TagContainerStyle = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`
const ButtonContainerStyle = styled.div`
  display: flex; 
  flex-direction: column; 
  gap: 8px; 
`

const ProjectCard = ({ image, tags, name, description, netlify, github }) => {
  return (
    <ProjectCardStyle>
      <div>
        <img src={image} alt="blaha" />
      </div>

      <CardTextStyle>
        <TagContainerStyle>
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </TagContainerStyle>
        <HeadingMedium title={name} />
        <p>{description}</p>
      </CardTextStyle>

      <ButtonContainerStyle>
        <Button icon="/assets/globe-icon.svg" label="Live Demo" url={netlify} />
        <Button icon="/assets/github.svg" label="View Code" url={github} />
      </ButtonContainerStyle>
    </ProjectCardStyle>
  )
}

export default ProjectCard