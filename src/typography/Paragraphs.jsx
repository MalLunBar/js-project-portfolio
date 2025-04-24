import styled from "styled-components";

const ParagraphStyle = styled.p`
  font-size: 16px;
  font-weight: 400;
`
const CenteredParagraphStyle = styled(ParagraphStyle)`
  text-align: center;
`

export const Paragraph = ({ children }) => {
  return (
    <ParagraphStyle>
      {children}
    </ParagraphStyle>
  )
}

export const CenteredParagraph = ({ text }) => {
  return (
    <CenteredParagraphStyle>
      {text}
    </CenteredParagraphStyle>

  )
}


