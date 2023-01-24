import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

const Contact = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className="contact-section">
      <h2>Contact</h2>
      <Button ref={target} onClick={() => setShow(!show)}>
        E-mail
      </Button>

      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip className="info" id="info" {...props}>
            <h3>kpeti962@gmail.com</h3>
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
};

export default Contact;
