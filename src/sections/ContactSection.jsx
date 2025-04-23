import Heading from "../typography/Headings"
import HeadingMedium from "../typography/HeadingsMedium"
import StyledSection from "./StyledSection"
import styled from "styled-components"
import { lightTheme, darkTheme } from "../theme"

const ContactSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`

const ImgContainerStyle = styled.div`
  display: flex;
  align-item: center; 
  justify-content: center; 
`
const ContactImgStyle = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 50%;

`

const ContactSection = () => {
  return (
    <StyledSection theme={darkTheme}>
      <ContactSectionStyle>
        <Heading title="Let's Talk" />
        <ImgContainerStyle>
          <ContactImgStyle src="/assets/contact-pic.webp" alt=""/>
        </ImgContainerStyle>
        <div>
          <HeadingMedium title="Malin Lundgren" />
          <HeadingMedium title="+46(0)737060052" />
          <HeadingMedium title="malinelundgren1991" />
        </div>
      </ContactSectionStyle>
    </StyledSection>
  )
}

export default ContactSection