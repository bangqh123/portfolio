import "./styles/index.scss"

import { StrictMode, Suspense, lazy } from "react"
import { createRoot } from "react-dom/client"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const ResumePage = lazy(() => import("./pages/resume/ResumePage"))
const ProjectPage = lazy(() => import("./pages/projects/ProjectsPage"))
const ContactPage = lazy(() => import("./pages/contact/ContactPage"))


import NotFoundPage from "./pages/notfound/NotFoundPage";
import Loading from "./components/loadings/Loadings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route 
        path="/" 
        element={ 
          <Suspense fallback={ <Loading isLoading={true} />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route 
        path="/resume" 
        element={ 
          <Suspense fallback={ <Loading isLoading={true} />}>
            <ResumePage />
          </Suspense>
        }
      />
      <Route 
        path="/project" 
        element={ 
          <Suspense fallback={ <Loading isLoading={true} />}>
            <ProjectPage />
          </Suspense>
        }
      />
      <Route 
        path="/contact" 
        element={ 
          <Suspense fallback={ <Loading isLoading={true} />}>
            <ContactPage />
          </Suspense>
        }
      />
      
      <Route path="*" element={<NotFoundPage />} />
    </>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
