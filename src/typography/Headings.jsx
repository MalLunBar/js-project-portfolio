import styled from "styled-components"


const HeadingStyled = styled.h2`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
`

const Heading = ({ title }) => {
  return (
    <HeadingStyled>
      {title}
    </HeadingStyled>
  )
}

export default Heading