import styled from "styled-components"

const TagStyle = styled.span`
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  display: flex;
  height: 28px;
  padding: 2px 6px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  flex: 1 0 0;
  
`


const Tag = ({ theme, label }) => {
  return (
    <TagStyle theme={theme}>
      {label}
    </TagStyle>
  )
}

export default Tag