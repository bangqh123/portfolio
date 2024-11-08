import "./Contact.scss";
import "./Contact.media.scss";

import FormContact from "../../../../components/forms/FormContact/FormContact";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-content">
          <FormContact title="You want to say" className="contact-content-form"/>
      </div>
    </div>
  );
};

export default Contact;
