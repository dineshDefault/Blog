import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { BlogListContext } from "../store/BlogsListProvider";
import CreateAndEditBlog from "./CreateAndEditBlog";

const EditBlog = () => {
  const location = useLocation();
  const { state } = location;

  const [blogData, setBlogData] = useState(state);
  const { editBlog } = useContext(BlogListContext);

  const onChangeBlogData = (e) => {
    const { value, name } = e.target;

    setBlogData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editBlog(blogData);
  };

  return (
    <CreateAndEditBlog
      blogData={blogData}
      onChangeData={onChangeBlogData}
      handleSubmit={handleSubmit}
    />
  );
};

export default EditBlog;
