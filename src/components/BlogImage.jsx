import styled from "styled-components";
import { media } from "../media";

const BlogImgContainerStyle = styled.div`
  display: flex;
  flex-direction: column; 
  
  width: 100%; 
  height: 200px;
  align-self: stretch;

  @media ${media.tablet} {
    width: 200px;
    
    
  }
  
`
const BlogCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;

  @media ${media.tablet} {
    width: 200px;
    
    
    
  }
`


export const BlogImage = ({ image }) => {
  return (
    <BlogImgContainerStyle>
      <BlogCardImage src={image} alt="" />
    </BlogImgContainerStyle>
  )
}