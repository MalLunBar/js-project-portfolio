import { ExtendedTag } from "./Tag"
import styled from "styled-components"


const SkillCardStyle = styled.div`
 display: flex;
 flex-direction: column;
 gap: 16px;

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