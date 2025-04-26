import styled from "styled-components"

const TagStyle = styled.span`
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  display: flex;
  height: 28px;
  padding: 2px 6px;
  justify-content: center;
  align-items: flex-start;
  max-width: 142px;
  align-self: stretch;
  flex: 1 0 0;
  
`

const ExtendedTagStyle = styled(TagStyle)`
  width: 177px; 
  flex: 0;
`

export const Tag = ({ theme, label }) => {
  return (
    <TagStyle theme={theme}>
      {label}
    </TagStyle>
  )
}


export const ExtendedTag = ({ theme, label }) => {
  return (
    <ExtendedTagStyle theme={theme}>
      {label}
    </ExtendedTagStyle>
  )
}


