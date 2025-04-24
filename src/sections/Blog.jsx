import { StyledCardSection } from "./StyledSection"
import Heading from "../typography/Heading";
import BlogCard from "../components/BlogCard";
//Det finns inget BlogCard än så länge
const Blog = () => {
  return (
    <StyledCardSection>
      <Heading title="My Words" />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </StyledCardSection>
  )
}

export default Blog