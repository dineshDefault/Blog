import BlogList from "./BlogList";
import { useContext } from "react";
import { BlogListContext } from "../store/BlogsListProvider";

const Home = () => {
  const { blogsList } = useContext(BlogListContext);

  return (
    <div className="home">
      <BlogList blogs={blogsList} />
    </div>
  );
};

export default Home;
