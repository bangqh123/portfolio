import contactData from "../../js/contact";
import { TContactPortfolio } from "../../types/contactsType";

const ContactUserService = {
  postContact: async (data: TContactPortfolio) => {
    try {
      contactData.push(data);
      return contactData;
    } catch (error) {
      console.error("Error posting contact data:", error);
      throw error;
    }
  },
};

export default ContactUserService;
