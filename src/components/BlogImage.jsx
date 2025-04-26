import styled from "styled-components";
import { media } from "../media";


const BlogCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;

  @media ${media.tablet} {
    width: 200px;
    height: 100%;
  }
  @media ${media.desktop} {
    width: 479px;
  }
`


export const BlogImage = ({ image }) => {
  return <BlogCardImage src={image} alt="" />
}



