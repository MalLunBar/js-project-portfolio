import GlobalStyle from "./GlobalStyle"
import About from "./sections/About"
import TechStack from "./sections/TechStack"
import ProjectSection from "./sections/ProjectsSection"
import Skills from "./sections/Skills"
import Blog from "./sections/Blog"
import Contact from "./sections/Contact"



export const App = () => {
  return (
    <>
      <GlobalStyle />
        <About />
        <TechStack />
        <ProjectSection />
        <Skills />
        <Blog />
        <Contact />
      


    </>
  )
}


