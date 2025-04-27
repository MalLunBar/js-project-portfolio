import styled from "styled-components";



const IconStyled = styled.img`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.$background || "black"};
`
const WhiteIconStyled = styled(IconStyled)`
  background-color: white;
`

const IconLink = ({ icon, background }) => {
  return (
    <>
      {icon && <IconStyled
        src={icon}
        alt=""
        aria-hidden="true"
        $background={background} />}
    </>
  )

}

export default IconLink 
