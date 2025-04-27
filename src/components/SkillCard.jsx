import { ExtendedTag } from "./Tag"
import styled from "styled-components"
import { media } from "../media"


const SkillCardStyle = styled.div`
 display: flex;
 flex-direction: column;
 gap: 16px;
 
 @media ${media.tablet} {
    text-align: center;
  }
  @media ${media.desktop} {
    text-align: left;
    justify-content: flex-start;
  }
`
const SkillCard = ({ name, skills, theme }) => {
  return (
    <SkillCardStyle>
      <ExtendedTag
        label={name}
        theme={theme} />
      <div>
        {skills.map((skill) => (
          <p key={skill}>{skill}</p>
        ))}
      </div>

    </SkillCardStyle>
  )
}

export default SkillCard