import styled from "styled-components"
import IconLink from "./IconLink"



const ButtonStyled = styled.a`
  background-color: ${(props) => props.$background || "black"};
  color: ${(props) => props.$text || "white"};
  border: ${(props) => props.$border || "none"};
  border-radius: 12px;
  width: 303px;
  height: 48px;
  font-size: 18px;
  padding: 16px;
  display: flex;
  gap: 16px;
  align-items: center;
  text-decoration: none;
  
`

export const Button = ({ icon, label, url, background, text, border }) => {
  return (
    <ButtonStyled
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      $background={background}
      $text={text}
      $border={border}
    >
      <IconLink 
        icon={icon} 
        url={url} 
        background={background} />
      {label}
    </ButtonStyled>
  )
}

