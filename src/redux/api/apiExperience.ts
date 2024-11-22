import experiencedata from "../../js/experience";

const ProfolioExperienceService = {
  getPortfolio: async () => {
      try {
          return await new Promise((resolve) => {
              setTimeout(() => resolve(experiencedata), 500);
          });
      } catch (error) {
          console.error("Error fetching data:", error);
          throw error;
      }
  },
};

export default ProfolioExperienceService;