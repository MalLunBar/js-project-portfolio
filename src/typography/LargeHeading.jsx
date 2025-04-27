import styled from "styled-components";
import { media } from "../media";


const LargeHeadingStyle = styled.h1`
  font-size: 52px; 
  text-align: center;
  line-height: 56px;

  @media ${media.tablet} {
    line-height: 100px;
    
  }
  @media ${media.desktop} {
    font-size: 100px;
    line-height: normal;
    
  }
`

const LargeHeading = ({ title }) => {
  return (
    <LargeHeadingStyle>
      {title}
    </LargeHeadingStyle>
  )
}

export default LargeHeading