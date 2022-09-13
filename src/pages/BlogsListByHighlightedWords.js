import { useContext } from "react";
import { BlogListContext } from "../store/BlogsListProvider";
import BlogList from "./BlogList";

const BlogsListByHighlightedWords = () => {
  const { blogListByHighlightedWords } = useContext(BlogListContext);

  return <BlogList blogs={blogListByHighlightedWords} />;
};

export default BlogsListByHighlightedWords;
