
import Button from "./Button"
import Tag from "./Tag"
import { HeadingMedium } from "../typography/HeadingsMedium"
import styled from "styled-components"
import { Paragraph } from "../typography/Paragraphs"
import { ProjectImage } from "./ProjectImage"

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
  align-items: flex-start;
  align-self: stretch;
`


const ProjectCard = ({ image, tags, name, description, netlify, github }) => {
  return (
    <ProjectCardStyle>
      <ProjectImage image={image} />
      <CardTextStyle>
        <TagContainerStyle>
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </TagContainerStyle>
        <HeadingMedium title={name} />
        <Paragraph>{description}</Paragraph>
      </CardTextStyle>

      <ButtonContainerStyle>
        <Button icon="/assets/globe-icon.svg" label="Live Demo" url={netlify} />
        <Button icon="/assets/github.svg" label="View Code" url={github} />
      </ButtonContainerStyle>
    </ProjectCardStyle>
  )
}

export default ProjectCard