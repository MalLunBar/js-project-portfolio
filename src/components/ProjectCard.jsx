
import { Button } from "./Button"
import styled from "styled-components"
import { ProjectImage } from "./ProjectImage"
import { CardTextContent } from "./CardTextContent"
import { media } from "../media"

export const ProjectCardStyle = styled.article`
  display: flex; 
  flex-direction: column; 
  gap: 32px; 

  @media ${media.tablet} {
    gap: 64px; 
  }
  
  @media ${media.desktop} {
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
    gap: 125px;
    align-items: center;
  }
`
const CardContent = styled.div`
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


export const ProjectCard = ({ image, tags, name, description, netlify, github, index }) => {
  return (
    <ProjectCardStyle $reverse={index % 2 !== 0}>
      <ProjectImage image={image} />
      <CardContent>
        <CardTextContent
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
      </CardContent>
    </ProjectCardStyle>
  )
}

