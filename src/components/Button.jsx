import styled from "styled-components"
import IconLink from "./IconLink"


const ButtonStyled = styled.a`
 background-color: black; 
 color: white; 
 border-radius: 12px;
 width: 100%; 
 height: 48px;
 font-size: 18px;
 padding: 16px; 
 display: flex;
 gap: 16px; 
 align-items: center;
 text-decoration: none;

`

const Button = ({ icon, label, url }) => {
  return (
    <ButtonStyled href={url} target="_blank" rel="noopener noreferrer">
      <IconLink icon={icon} url={url} />
      {label}
    </ButtonStyled>
  )
}

export default Button 