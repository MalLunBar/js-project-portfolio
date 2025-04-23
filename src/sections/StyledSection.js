import styled from "styled-components"


const StyledSection = styled.section`
  padding: 64px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  * {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
`

export default StyledSection