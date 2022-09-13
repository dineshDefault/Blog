import { useState, useContext, useId } from "react";
import { BlogListContext } from "../store/BlogsListProvider";
import CreateAndEditBlog from "./CreateAndEditBlog";

const CreateBlog = () => {
  const id = useId();
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    author: "",
    id,
  });

  const { addNewBlog } = useContext(BlogListContext);

  const onChangeBlogData = (e) => {
    const { value, name } = e.target;

    setBlogData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewBlog(blogData);
  };

  return (
    <CreateAndEditBlog
      blogData={blogData}
      onChangeData={onChangeBlogData}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateBlog;
