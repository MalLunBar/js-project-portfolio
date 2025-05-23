
import { CenteredHeadingMedium, SmallerHeadingMedium } from "../typography/HeadingsMedium"
import LargeHeading from "../typography/LargeHeading"
import { Paragraph } from "../typography/Paragraphs"
import { StyledSection } from "./StyledSection"
import styled from "styled-components"
import { media } from "../media"

export const TextContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media ${media.tablet} {
    max-width: 696px;
  }

  @media ${media.desktop} {
    max-width: 782px;
  }
`
const ProfileImage = styled.img`
  @media ${media.tablet} {
    max-width: 566px;
    
  }
  @media ${media.desktop} {
    max-width: 982px;
  }
`

export const About = () => {
  return (

    <StyledSection>
      <CenteredHeadingMedium title="Hi There, I'm" />
      <LargeHeading title="Malin Lundgren" />
      <ProfileImage src="/assets/profile-pic.png" alt="Profile picture of Malin Lundgren" />
      <TextContentStyle>
        <SmallerHeadingMedium title="Curious Frontend Developer" />
        <Paragraph center>
          Problem-solving makes me tick and I love finding ways to make things work better for users. In my past jobs in customer service, I was always the one pushing for smarter ways to do things, and that mindset has followed me into tech. I love the feeling of getting into a flow with code, especially when I'm learning something new or figuring out how to make a feature better.
          <br /><br />

          My goal is to move into system-level or application development, where I can work on more complex logic and structures, not just visual interfaces.
        </Paragraph>
      </TextContentStyle>
    </StyledSection>
  )
}

