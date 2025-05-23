import Heading from "../typography/Heading"
import skills from "../data/skills.json"
import SkillCard from "../components/SkillCard"
import styled from "styled-components"
import { StyledSection } from "./StyledSection"
import { darkTheme } from "../theme"
import { media } from "../media"

const SkillStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${media.desktop} {
    flex-direction: row;
     
  }
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