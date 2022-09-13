import { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";
import { blogsForDemo, updateLocalStroage, wordsForDemo } from "../../utils";

export const BlogListContext = createContext();

const BlogsListProvider = ({ children }) => {
  const [blogsList, setBlogsList] = useState([]);
  const [highlightedWords, setHighlightedWords] = useState([]);

  const [blogListByHighlightedWords, setBlogListByHighlightedWords] = useState(
    []
  );
  const history = useHistory();

  const getBlogsList = JSON.parse(localStorage.getItem("blogs")) || [];
  const getHighlightedWords = JSON.parse(localStorage.getItem("words")) || [];

  useEffect(() => {
    let list;
    let words;

    if (getBlogsList.length > 0) {
      list = getBlogsList;
    } else {
      updateLocalStroage("blogs", blogsForDemo);
      list = blogsForDemo;
    }

    if (getHighlightedWords.length > 0) {
      words = getHighlightedWords;
    } else {
      updateLocalStroage("words", wordsForDemo);
      words = wordsForDemo;
    }

    setBlogsList(list);
    setHighlightedWords(words);
  }, []); //eslint-disable-line

  const addNewBlog = (blogData) => {
    const updatedBlogs = [...getBlogsList];
    updatedBlogs.push(blogData);
    updateBlogsStateAndStorage(updatedBlogs);
  };

  const deleteBlog = (id) => {
    const filteredBlogs = getBlogsList.filter((item) => item.id !== id);
    updateBlogsStateAndStorage(filteredBlogs);
  };

  const editBlog = (blogData) => {
    const updatedBlogs = [...getBlogsList];

    const blogIndex = updatedBlogs.findIndex((obj) => obj.id === blogData.id);
    updatedBlogs[blogIndex] = blogData;

    updateBlogsStateAndStorage(updatedBlogs);
  };

  const updateBlogsStateAndStorage = (blogData) => {
    setBlogsList(blogData);
    updateLocalStroage("blogs", blogData);
    history.push("/");
  };

  const updateHighlightedWordsList = (word) => {
    const wordToLowerCase = word.toLowerCase();
    const updateHighlightedWords = [...getHighlightedWords];

    const isWordPresent = updateHighlightedWords.includes(wordToLowerCase);

    if (!isWordPresent) {
      updateHighlightedWords.push(wordToLowerCase);
      setHighlightedWords(updateHighlightedWords);
      updateLocalStroage("words", updateHighlightedWords);
    }
  };

  const getBlogsOnClickWords = (word) => {
    const blogs = getBlogsList.filter((item) =>
      item.content.toLowerCase().includes(word)
    );
    setBlogListByHighlightedWords(blogs);
    history.push("/blogs-highlighted-words");
  };

  const value = {
    addNewBlog,
    blogsList,
    deleteBlog,
    editBlog,
    highlightedWords,
    updateHighlightedWordsList,
    getBlogsOnClickWords,
    blogListByHighlightedWords,
  };

  return (
    <BlogListContext.Provider value={value}>
      {children}
    </BlogListContext.Provider>
  );
};

export default BlogsListProvider;
