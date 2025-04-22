import Heading from "../typography/Headings"
import StyledSection from "./StyledSection"

const Contact = () => {
  return (
    <StyledSection>
      <Heading title="Let's Talk" />
      <img src="/assets/contact-pic.webp" alt="" />
      <p>Malin Lundgren</p>
      <p>+46(0)737060052</p>
      <p>malinelundgren1991@gmail.com</p>
    </StyledSection>
  )
}

export default Contact