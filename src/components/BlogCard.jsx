import Button from "./Button"
import styled from "styled-components"
import { CardContent } from "./CardContent"
import { BlogImage } from "./BlogImage"


const BlogCardStyle = styled.div`
  display: flex; 
  flex-direction: column; 
  gap: 32px; 
`

const BlogCard = ({ image, tags, name, description, link }) => {
  return (
    <BlogCardStyle>
      <BlogImage
        image={image}
      />
      <div>
        <CardContent
          name={name}
          tags={tags}
          description={description} />
        <Button
          icon="./assets/globe-icon.svg"
          label="Read article"
          url={link} />
      </div>
    </BlogCardStyle>
  )
}

export default BlogCard