import educationData from "../../js/education";

const ProfolioEducationService = {
  getPortfolio: async () => {
      try {
          return await new Promise((resolve) => {
              setTimeout(() => resolve(educationData), 500);
          });
      } catch (error) {
          console.error("Error fetching data:", error);
          throw error;
      }
  },
};

export default ProfolioEducationService;