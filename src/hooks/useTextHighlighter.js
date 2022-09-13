import { useState, useRef, useEffect, useContext } from "react";
import { BlogListContext } from "../store/BlogsListProvider";

const useTextHighlighter = () => {
  const [selectedText, setSelectedText] = useState("");
  const { updateHighlightedWordsList } = useContext(BlogListContext);

  const [xRange, setXRange] = useState(0);
  const [yRange, setYRange] = useState(0);

  const [showPopover, setShowPopover] = useState(false);
  const selectedTextRef = useRef(null);

  const onSelectText = () => {
    const selection = window.getSelection();
    const text = selection.toString().trim();

    if (!text) {
      setShowPopover(false);
    }

    const selectionRange = selection.getRangeAt(0);

    const startNode = selectionRange.startContainer.parentNode;
    const endNode = selectionRange.endContainer.parentNode;

    const highlightable = selectedTextRef.current;
    const highlightableRegion = highlightable.querySelector(".popover");

    if (highlightableRegion) {
      if (
        !highlightableRegion.contains(startNode) ||
        !highlightableRegion.contains(endNode)
      ) {
        setShowPopover(false);
      }
    } else if (
      !highlightable.contains(startNode) ||
      !highlightable.contains(endNode)
    ) {
      setShowPopover(false);
    }

    if (!startNode.isSameNode(endNode)) {
      setShowPopover(false);
    }

    const { x, y, width } = selectionRange.getBoundingClientRect();

    if (!width) {
      setShowPopover(false);
    }

    const alphaNumericRegex = new RegExp(/^[\w\-\s]+$/);

    if (alphaNumericRegex.test(text)) {
      setXRange(x + width / 10);
      setYRange(y + window.scrollY - 60);
      setSelectedText(text);
      setShowPopover(true);
    }
  };

  const onClickHighlightTextIcon = () => {
    updateHighlightedWordsList(selectedText);

    const blogContent = selectedTextRef.current.querySelector(".blog-content");
    blogContent.innerHTML = blogContent.textContent.replaceAll(
      selectedText,
      (match) => `<mark>${match}</mark>`
    );

    setShowPopover(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        selectedTextRef.current &&
        !selectedTextRef.current.contains(event.target)
      ) {
        setShowPopover(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [selectedTextRef]);

  return {
    selectedText,
    xRange,
    yRange,
    showPopover,
    onSelectText,
    selectedTextRef,
    onClickHighlightTextIcon,
  };
};

export default useTextHighlighter;
