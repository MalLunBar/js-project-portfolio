import styled from "styled-components";

const ParagraphStyle = styled.p`
  font-size: 16px;
  font-weight: 400;
`

const Paragraph = ({ text }) => {
  return (
    <ParagraphStyle>
      {text}
    </ParagraphStyle>
  )
}

export default Paragraph