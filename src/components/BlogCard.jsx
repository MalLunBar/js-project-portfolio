import Button from "./Button"
import styled from "styled-components"
import { ProjectCardStyle } from "./ProjectCard"
import { ProjectContent } from "./ProjectContent"
import { BlogImage } from "./BlogImage"


const BlogCard = ({ image, tags, name, description, link }) => {
  return (
    <ProjectCardStyle>
      <BlogImage
        image={image}
         />
      <ProjectContent 
        name={name}
        tags={tags}
        description={description} />
      <Button
        icon="./assets/globe-icon.svg"
        label="Read article"
        url={link} />
    </ProjectCardStyle>
  )
}

export default BlogCard