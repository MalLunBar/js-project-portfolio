//tag between skills and text
import Heading from "../typography/Headings"
import skills from "../data/skills.json"
import SkillCard from "../components/SkillCard"
import styled from "styled-components"
import StyledSection from "./StyledSection"
import { lightTheme, darkTheme } from "../theme"

const SkillStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const SkillsSection = () => {
  return (
    <StyledSection theme={darkTheme}>
      <Heading title="Skills" />
      <SkillStyle>
        {skills.skills.map((skill) => {
          return (
            <SkillCard
              key={skill.name}
              name={skill.name}
              skills={skill.skills}
              theme={darkTheme}
            />
          )
        }
        )}
      </SkillStyle>

    
    </StyledSection>
  )
}

export default SkillsSection