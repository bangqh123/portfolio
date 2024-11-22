import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./../slices/portfolioSlices";
import projectReducer from "./../slices/projectsSlice";
import contactReducer from "./../slices/contactSlices";
import educationRecer from "./../slices/educationSlies";
import experienceRecer from "./../slices/experienceSlices";

const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        education: educationRecer,
        experience: experienceRecer,
        project: projectReducer,
        contact: contactReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
