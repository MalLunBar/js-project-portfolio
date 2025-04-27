import Heading from "../typography/Heading"
import { StyledSection } from "./StyledSection"
import styled from "styled-components"
import { lightTheme, darkTheme } from "../theme"
import IconLink from "../components/IconLink"
import { Paragraph } from "../typography/Paragraphs"
import { media } from "../media"

const ContactSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
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
const IconContainer = styled.div`
  display: flex; 
  justify-content: center;
  gap: 32px;
`

const ParagraphContainer = styled.div`
  display: flex; 
  flex-direction: column;
  gap: 8px;
  width: 270px;
  justify-content: center;
  

  @media ${media.tablet} {
    text-align: center;
  }
`


const ContactSection = () => {
  return (
    <StyledSection theme={darkTheme}>
      <Heading title="Let's Talk" />
      <ContactSectionStyle>
        <ImgContainerStyle>
          <ContactImgStyle src="/assets/contact-pic.webp" alt="" />
        </ImgContainerStyle>
        <ParagraphContainer>
          <Paragraph center>Malin Lundgren</Paragraph>
          <Paragraph center>+46(0)737060052</Paragraph>
          <Paragraph center>malinelundgren1991@gmail.com</Paragraph>
        </ParagraphContainer>
        <IconContainer>
          <IconLink icon="/assets/linkedin-icon.svg" url="https://www.linkedin.com/in/malin-elisabeth-lundgren/" />
          <IconLink icon="/assets/github.svg" url="https://github.com/MalLunBar/js-project-business-site" />
          <IconLink icon="/assets/instagram-icon.svg" url="https://www.instagram.com/malin_e_lundgren/" />
        </IconContainer>
      </ContactSectionStyle>
    </StyledSection>
  )
}


export default ContactSection