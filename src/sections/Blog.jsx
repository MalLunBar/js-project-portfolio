import StyledSection from "./StyledSection"
import Heading from "../typography/Heading";
import BlogCard from "../components/BlogCard";
//Det finns inget BlogCard än så länge
const Blog = () => {
  return (
    <StyledSection>
      <Heading title="My Words" />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </StyledSection>
  )
}

export default Blog