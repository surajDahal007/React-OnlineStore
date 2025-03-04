import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <hr />
        <p className="text-center text-body-secondary">
          &copy; Developed by &nbsp;
          <a href="https://github.com/surajDahal007" target="_blank" rel="noreferrer">
            Suraj Dahal
          </a>{" "}
          and &nbsp;<a href="/">GitHub repo</a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
