import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./../slices/portfolioSlices";
import projectReducer from "./../slices/projectsSlice";
import contactReducer from "./../slices/contactSlices";

const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        project: projectReducer,
        contact: contactReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
