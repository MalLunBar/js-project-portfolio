import styled from "styled-components";

const LargeHeadingStyle = styled.h1`
  font-size: 52px; 
  text-align: center;
  line-height: 56px;
`

const LargeHeading = ({ title }) => {
  return (
    <LargeHeadingStyle>
      {title}
    </LargeHeadingStyle>
  )
}

export default LargeHeading