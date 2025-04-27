import { Button } from "./Button"
import styled from "styled-components"
import { CardTextContent } from "./CardTextContent"
import { BlogImage } from "./BlogImage"
import { media } from "../media"


const BlogCardStyle = styled.div`
  display: flex; 
  flex-direction: column; 
  gap: 32px;
  flex: 1 0 0;

  
  @media ${media.tablet} {
    flex-direction: row;
  }
  @media ${media.desktop} {
    gap: 125px; 
  }
`
const BlogCardTextStyle = styled.div`
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
      <BlogCardTextStyle>
        <CardTextContent
          name={name}
          tags={tags}
          description={description} />
        <Button
          icon="./assets/globe-icon.svg"
          label="Watch Trailer"
          url={link} />
      </BlogCardTextStyle>
    </BlogCardStyle>
  )
}

export default BlogCard