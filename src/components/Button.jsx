import styled from "styled-components"
import IconLink from "./IconLink"
import { useState } from "react";



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

const CenteredButtonStyled = styled(ButtonStyled)`
  align-self: center; 
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

export const CenteredButton = ({ icon, label, url, background, text, border }) => {

  const [showBox, setShowBox] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowBox(true);
  }

  return (
    <>
      <CenteredButtonStyled
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        $background={background}
        $text={text}
        $border={border}
        onClick={handleClick}
      >
        <IconLink
          icon={icon}
          url={url}
          background={background} />
        {label}
      </CenteredButtonStyled>

      {showBox && (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#eee", borderRadius: "8px" }}>
          No more projects to show!
        </div>
      )}
    </>

  )
}

