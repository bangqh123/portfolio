import "./Contact.scss"

import LayoutPage from "../../layouts/LayoutPage/LayoutPage";
import ContactForm from "./partials/ContactForm/ContactForm";
import ContactMap from "./partials/ContactMap/ContactMap";

const ContactPage = () => {
    return (
      <LayoutPage>
        <div className="contact">
          <ContactMap />
          <ContactForm />
        </div>
      </LayoutPage>
    )
  };
  
  export default ContactPage;