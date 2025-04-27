import styled from "styled-components"
import { media } from "../media"

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;

  @media ${media.desktop} {
    width: 479px;
    height: 479px;  
  }  
`
export const ProjectImage = ({ image }) => {
  return <CardImage src={image} alt="" aria-hidden="true" />
}