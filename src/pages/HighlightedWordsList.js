import { useContext } from "react";
import { BlogListContext } from "../store/BlogsListProvider";

const HighlightedWordsList = () => {
  const { highlightedWords, getBlogsOnClickWords } =
    useContext(BlogListContext);

  return (
    <div className="blog-list">
      <h2>Highlighted Words</h2>
      <ul>
        {highlightedWords.map((item, i) => (
          <li onClick={() => getBlogsOnClickWords(item)} key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighlightedWordsList;
