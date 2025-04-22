import styled from "styled-components"


const HeadingMedStyled = styled.h3`
  font-size: 24px;
  font-weight: 500;
`

const HeadingMedium = ({ title }) => {
  return (
    <HeadingMedStyled>
      {title}
    </HeadingMedStyled>
  )
}

export default HeadingMedium