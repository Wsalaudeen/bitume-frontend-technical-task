import { useState } from "react";

export const useReadMore = (text, maxLength = 20) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength);
  };

  const toggleExpanded = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const shouldTruncate = text && text.length > maxLength;
  const displayText = shouldTruncate
    ? isExpanded
      ? text
      : truncateText(text, maxLength)
    : text;

  return {
    displayText,
    isExpanded,
    shouldTruncate,
    toggleExpanded,
  };
};
