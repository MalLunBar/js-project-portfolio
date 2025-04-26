import styled from "styled-components"
import { media } from "../media"



const HeadingStyled = styled.h2`
  text-align: center;
  font-size: 48px;
  font-weight: 700;

  @media ${media.desktop} {
    font-size: 80px;
    
  }
`

const Heading = ({ title }) => {
  return (
    <HeadingStyled>
      {title}
    </HeadingStyled>
  )
}

export default Heading
