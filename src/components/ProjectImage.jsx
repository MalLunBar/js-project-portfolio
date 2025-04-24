import styled from "styled-components"

const ImgContainerStyle = styled.div`
  width: 100%; 
  height: 479px;
  align-self: stretch;
  
`
const CardImage = styled.img`
  width: 100%;
  height: 497px;
  object-fit: cover;
  border-radius: 12px;
`


export const ProjectImage = ({ image }) => {
  return (
    <ImgContainerStyle>
      <CardImage src={image} alt="" />
    </ImgContainerStyle>
  )
}
