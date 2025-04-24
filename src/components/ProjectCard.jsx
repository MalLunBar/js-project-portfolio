
import Button from "./Button"
import styled from "styled-components"
import { ProjectImage } from "./ProjectImage"
import { ProjectContent } from "./CardContent"

export const ProjectCardStyle = styled.article`
  display: flex; 
  flex-direction: column; 
  gap: 32px; 
`

const ButtonContainerStyle = styled.div`
  display: flex; 
  flex-direction: column; 
  gap: 8px;  
  align-items: flex-start;
  align-self: stretch;
`


export const ProjectCard = ({ image, tags, name, description, netlify, github }) => {
  return (
    <ProjectCardStyle>
      <ProjectImage image={image} />
      <CardContent
        tags={tags}
        name={name}
        description={description} />

      <ButtonContainerStyle>
        <Button
          icon="/assets/globe-icon.svg"
          label="Live Demo"
          url={netlify} />
        <Button
          icon="/assets/github.svg"
          label="View Code"
          url={github} />
      </ButtonContainerStyle>
    </ProjectCardStyle>
  )
}

