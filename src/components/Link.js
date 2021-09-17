import React, { useRef } from "react";

const Link = (props) => {
  const { link, shortLink } = props.links;
  const buttonRef = useRef(null);
  const copyLink = (text) => {
    navigator.clipboard.writeText(text);
    buttonRef.current.textContent = "Copied!";
    buttonRef.current.classList.add("copied");
    setTimeout(() => {
      buttonRef.current.textContent = "Copy";
      buttonRef.current.classList.remove("copied");
    }, 1000);
  };
  return (
    <div className="shortened">
      <span className="link">{link}</span>
      <span className="link-short">{shortLink}</span>
      <button
        className="button button-cyan"
        ref={buttonRef}
        onClick={() => copyLink(shortLink)}
      >
        Copy
      </button>
    </div>
  );
};

export default Link;
