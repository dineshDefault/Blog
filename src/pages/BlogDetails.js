import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { BlogListContext } from "../store/BlogsListProvider";
import useTextHighlighter from "../hooks/useTextHighlighter";
import Highlight from "../icons/marker.png";

const BlogDetails = () => {
  const location = useLocation();
  const { state } = location;
  const {
    xRange,
    yRange,
    showPopover,
    onSelectText,
    selectedTextRef,
    onClickHighlightTextIcon,
  } = useTextHighlighter();

  const { deleteBlog } = useContext(BlogListContext);

  return (
    <div className="blog-details">
      {state && (
        <article>
          <h2>{state.title}</h2>
          <p>Written by {state.author}</p>
          <div onMouseUp={onSelectText} ref={selectedTextRef}>
            {showPopover && (
              <div
                className="popover"
                style={{ left: `${xRange}px`, top: `${yRange}px` }}
                onClick={onClickHighlightTextIcon}
              >
                <img src={Highlight} alt="highlight-icon" />
              </div>
            )}
            <p className="blog-content">{state.content}</p>
          </div>
          <div className="buttons-container">
            <button onClick={() => deleteBlog(state.id)}>Delete</button>
            <Link to={{ pathname: "/edit", state }}>Edit</Link>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
