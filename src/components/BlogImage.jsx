import styled from "styled-components";

const BlogImgContainerStyle = styled.div`
  width: 100%; 
  height: 200px;
  align-self: stretch;
  
`
const BlogCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
`


export const BlogImage = ({ image }) => {
  return (
    <BlogImgContainerStyle>
      <BlogCardImage src={image} alt="" />
    </BlogImgContainerStyle>
  )
}