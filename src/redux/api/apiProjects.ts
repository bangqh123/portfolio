import projectsData from "../../js/project";

const ProjectsUserService = {
    getPortfolio: async () => {
        try {
            return await new Promise((resolve) => {
                setTimeout(() => resolve(projectsData), 500);
            });
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    },
};

export default ProjectsUserService;
