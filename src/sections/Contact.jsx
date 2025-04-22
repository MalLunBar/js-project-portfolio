import Heading from "../typography/Headings"
import HeadingMedium from "../typography/HeadingsMedium"
import StyledSection from "./StyledSection"

const Contact = () => {
  return (
    <StyledSection>
      <Heading title="Let's Talk" />
      <img src="/assets/contact-pic.webp" alt="" />
      <HeadingMedium title="Malin Lundgren"/>
      <HeadingMedium title="+46(0)737060052"/>
      <HeadingMedium title="malinelundgren1991"/>
     
    </StyledSection>
  )
}

export default Contact