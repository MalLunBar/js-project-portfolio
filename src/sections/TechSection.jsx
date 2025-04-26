
import Heading from "../typography/Heading"
import { StyledSection } from "./StyledSection"
import { Paragraph } from "../typography/Paragraphs"
import { lightTheme, darkTheme } from "../theme"
import { TextContentStyle } from "./About"


const TechSection = () => {
  return (
    <StyledSection theme={darkTheme}>
      <Heading title="Tech" />
      <TextContentStyle>
        <Paragraph align="center" children="HTML, CSS, Flexbox, JavaScript, ES6,
        JSX, React, React Hooks, Node.js,
        Mongo DB, Java, Python, Web Accessibility, APIs,
        mob-programming, pair-programming, GitHub."/>
      </TextContentStyle>
    </StyledSection>
  )
}

export default TechSection