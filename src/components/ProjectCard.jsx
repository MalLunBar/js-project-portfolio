
import Button from "./Button"
import Tag from "./Tag"
import HeadingMedium from "../typography/HeadingsMedium"
import styled from "styled-components"
import Paragraph from "../typography/Paragraphs"


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
const ImgContainerStyle = styled.div`
  width: 100%; 
  height: 479px;
  align-self: stretch;
  
`
const CardImage = styled.img`
  width: 100%;
  height: 497px;
  object-fit: cover;
  border-radius: 12px;
`

const ProjectCard = ({ image, tags, name, description, netlify, github }) => {
  return (
    <ProjectCardStyle>
      <ImgContainerStyle>
        <CardImage src={image} alt="" />
      </ImgContainerStyle>

      <CardTextStyle>
        <TagContainerStyle>
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </TagContainerStyle>
        <HeadingMedium title={name} />
        <Paragraph text={description} />
      </CardTextStyle>

      <ButtonContainerStyle>
        <Button icon="/assets/globe-icon.svg" label="Live Demo" url={netlify} />
        <Button icon="/assets/github.svg" label="View Code" url={github} />
      </ButtonContainerStyle>
    </ProjectCardStyle>
  )
}

export default ProjectCard