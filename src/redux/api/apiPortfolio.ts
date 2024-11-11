import portfolioData from "../../js/user";

const PortfolioUserService = {
    getPortfolio: async () => {
        try {
            return await new Promise((resolve) => {
                setTimeout(() => resolve(portfolioData), 500);
            });
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    },
};

export default PortfolioUserService;
