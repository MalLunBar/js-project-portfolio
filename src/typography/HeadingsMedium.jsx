import styled from "styled-components"


const HeadingMedStyled = styled.h3`
  font-size: 24px;
  font-weight: 500;
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
`
export const SmallerHeadingMedium = ({ title }) => {
  return (
    <SmallerHeadingMedStyled>
      {title}
    </SmallerHeadingMedStyled>
  )
}


