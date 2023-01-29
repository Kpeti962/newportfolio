import React from "react";

const Contact = () => {
  return (
    <div className="contact-section">
      <h1 className="text-white">Contact</h1>
      <div className="info">
        <h3 className="left-info">
          <a href="mailto: kpeti962@gmail.com">kpeti962@gmail.com</a>
        </h3>
        <h3 className="right-info">
          <a href="tel: +36306464894">+36306464894</a>
        </h3>
        <h3 className="left-info">
          <a
            href="https://www.linkedin.com/in/p%C3%A9ter-koncz-53304720b/"
            target="_blank"
          >
            LinkedIn Link
          </a>
        </h3>
        <h3 className="right-info">
          <a href="https://github.com/Kpeti962" target="_blank">
            Github Link
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Contact;
