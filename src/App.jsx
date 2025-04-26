import GlobalStyle from "./GlobalStyle"
import { About } from "./sections/About"
import TechSection from "./sections/TechSection"
import ProjectSection from "./sections/ProjectsSection"
import SkillsSection from "./sections/SkillsSection"
import Blog from "./sections/BlogSection"
import ContactSection from "./sections/ContactSection"





export const App = () => {
  return (
    <>
      <GlobalStyle />
      <About />
      <TechSection />
      <ProjectSection />
      <SkillsSection />
      <Blog />
      <ContactSection />
    </>
  )
}


