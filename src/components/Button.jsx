import styled from "styled-components"


const ButtonStyled = styled.a`
 background-color: black; 
 color: white; 
 border-radius: 12px;
 width: 303px; 
 height: 48px;
 font-size: 18px;
 padding: 16px; 
 display: flex;
 gap: 16px; 
 align-items: center;

`

const IconStyled = styled.img`
  width: 31px;
  height: 31px;
`


const Button = ({ icon, label, url }) => {
  return (
    <ButtonStyled href={url} target="_blank" rel="noopener noreferrer">
      {icon && <IconStyled src={icon} alt="" />}
      {label}
    </ButtonStyled>
  )

}
export default Button 