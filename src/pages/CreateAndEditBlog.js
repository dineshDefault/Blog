import { useLocation } from "react-router-dom";

const CreateAndEditBlog = ({ blogData, handleSubmit, onChangeData }) => {
  const { title, content, author } = blogData;
  const { pathname } = useLocation();
  const isPathnameEdit = pathname === "/edit";

  return (
    <div className="create">
      <h2>{isPathnameEdit ? "Edit Blog" : "Add a New Blog"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={onChangeData}
          name="title"
        />
        <label>Blog content:</label>
        <textarea
          required
          value={content}
          onChange={onChangeData}
          name="content"
          rows={8}
        ></textarea>
        <label>Blog author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={onChangeData}
          name="author"
        />
        <button>{isPathnameEdit ? "Update Blog" : "Add Blog"}</button>
      </form>
    </div>
  );
};

export default CreateAndEditBlog;
