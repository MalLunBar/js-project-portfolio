import posts from "../data/blog.json"
import { StyledCardSection } from "./StyledSection"
import Heading from "../typography/Heading";
import BlogCard from "../components/BlogCard";


const BlogSection = () => {
  return (
    <StyledCardSection>
      <Heading title="My Words" />
      {posts.posts.map((post) => {
        return (
          <BlogCard
            key={post.name}
            image={post.image}
            name={post.name}
            description={post.description}
            tags={post.tags}
            link={post.link}
          />

        )
      })}


    </StyledCardSection>
  )
}

export default BlogSection