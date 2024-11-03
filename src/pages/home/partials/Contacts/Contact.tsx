import "./Contact.scss";
import "./Contact.media.scss";
import FormContact from "../../../../components/forms/FormContact/FormContact";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-content">
        <div className="contact-content-form">
          <FormContact title="You want to say" className="content-form-message"/>
        </div>
        <div className="contact-content-map">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70469.62685003318!2d105.01032934876832!3d9.027882798471136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a6ad47919551fd%3A0x41b1d4275dd360c0!2zSMawbmcgTeG7uSwgQ8OhaSBOxrDhu5tjLCBDw6AgTWF1LCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1730616229282!5m2!1svi!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ vị trí"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
