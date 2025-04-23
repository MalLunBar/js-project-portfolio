import styled from "styled-components";



const IconStyled = styled.img`
  width: 32px;
  height: 32px;
  background-color: black; 
  object-fit: cover;  
`


const IconLink = ({ icon, url }) => {
  return (
    <>
      {icon && <IconStyled src={icon} alt="" />}
    </>
  )

}

export default IconLink 
