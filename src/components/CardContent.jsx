import { Tag } from "./Tag"
import { HeadingMedium } from "../typography/HeadingsMedium"
import styled from "styled-components"
import { Paragraph } from "../typography/Paragraphs"

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

export const CardContent = ({ tags, name, description }) => {
  return (
    <CardTextStyle>
      <TagContainerStyle>
        {tags.map((tag) => (
          <Tag
            key={tag}
            label={tag} />
        ))}
      </TagContainerStyle>
      <HeadingMedium title={name} />
      <Paragraph>{description}</Paragraph>
    </CardTextStyle>

  )
}