import GlobalStyle from "./GlobalStyle"
import About from "./sections/About"
import TechSection from "./sections/TechSection"
import ProjectSection from "./sections/ProjectsSection"
import SkillsSection from "./sections/SkillsSection"
import Blog from "./sections/Blog"
import ContactSection from "./sections/ContactSection"
import FooterSection from "./sections/FooterSection"




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
        <FooterSection />
      


    </>
  )
}


