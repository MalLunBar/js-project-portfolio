import StyledSection from "./StyledSection"
import HeadingMedium from "../typography/HeadingsMedium"
const About = () => {
  return (

    <StyledSection>
      <HeadingMedium title="Hi There, I'm" />
      <h1>Malin Lundgren</h1>
      <img src="/assets/profile-pic.png" alt="" />
      <h2>Curious Frontend Developer</h2>
      <p>Problem-solving makes me tick and I love finding ways to make things work better for users. In my past jobs in customer service, I was always the one pushing for smarter ways to do things, and that mindset has followed me into tech. I love the feeling of getting into a flow with code, especially when I'm learning something new or figuring out how to make a feature better.

        My goal is to move into system-level or application development, where I can work on more complex logic and structures, not just visual interfaces.</p>
    </StyledSection>

  )
}

export default About