import Heading from "../typography/Headings";
import BlogCard from "../components/BlogCard";
//Det finns inget BlogCard än så länge
const Blog = () => {
  return (
    <>
      <Heading title="My Words" />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </>
  )
}

export default Blog