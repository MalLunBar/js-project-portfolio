import styled from "styled-components"
import { media } from "../media"


const HeadingMedStyled = styled.h3`
  font-size: 24px;
  font-weight: 500;
 
  @media ${media.desktop} {
    font-size: 30px;
    
    
  }
`

export const HeadingMedium = ({ title }) => {
  return (
    <HeadingMedStyled>
      {title}
    </HeadingMedStyled>
  )
}

const CenteredHeadingMedStyled = styled(HeadingMedStyled)`
  text-align: center; 
`

export const CenteredHeadingMedium = ({ title }) => {
  return (
    <CenteredHeadingMedStyled>
      {title}
    </CenteredHeadingMedStyled>
  )
}

const SmallerHeadingMedStyled = styled(CenteredHeadingMedStyled)`
  font-size: 20px;

  @media ${media.tablet} {
    font-size: 24px;
  }
  
  @media ${media.desktop} {
    font-size: 30px;
  }
  
`
export const SmallerHeadingMedium = ({ title }) => {
  return (
    <SmallerHeadingMedStyled>
      {title}
    </SmallerHeadingMedStyled>
  )
}


