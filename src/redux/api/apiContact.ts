import contactData from "../../js/contact";

const ProfolioContactService = {
  getPortfolio: async () => {
      try {
          return await new Promise((resolve) => {
              setTimeout(() => resolve(contactData), 500);
          });
      } catch (error) {
          console.error("Error fetching data:", error);
          throw error;
      }
  },
};

export default ProfolioContactService;
