import styled from "styled-components"
import { media } from "../media"

const ParagraphStyle = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: ${({ align }) => align || "left"};

  @media ${media.tablet} {
    text-align: ${({ align }) => align === "left" ? "left" : "center"};
  
  }
`


export const Paragraph = ({ children, align }) => {
  return <ParagraphStyle align={align}>{children}</ParagraphStyle>;
}
