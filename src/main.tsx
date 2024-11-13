import "./styles/index.scss";

import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const EducationPage = lazy(() => import("./pages/education/EducationPage"))
const ExperiencePage = lazy(() => import("./pages/experience/ExperiencePage"))
const ProjectPage = lazy(() => import("./pages/projects/ProjectsPage"));
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));

import NotFoundPage from "./pages/notfound/NotFoundPage";
import Loading from "./components/loadings/Loadings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/resume"
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <EducationPage />
          </Suspense>
        }
      />
      <Route
        path="/resume"
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <ExperiencePage />
          </Suspense>
        }
      />
      <Route
        path="/project"
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <ProjectPage />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<Loading isLoading={true} />}>
            <ContactPage />
          </Suspense>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
