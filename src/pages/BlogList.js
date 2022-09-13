import { Link, useLocation } from "react-router-dom";

const BlogList = ({ blogs }) => {
  const { pathname } = useLocation();
  const isBlogsWithHighlightedWords = pathname === "/blogs-highlighted-words";

  return (
    <div className="blog-list">
      <h2>
        {isBlogsWithHighlightedWords ? "Highlighted Words Blogs" : "All Blogs"}
      </h2>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={{ pathname: `/blogs/${blog.id}`, state: blog }}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))
      ) : (
        <div className="blog-no-preview">
          <h3>No Blogs For Preview</h3>
        </div>
      )}
    </div>
  );
};

export default BlogList;
