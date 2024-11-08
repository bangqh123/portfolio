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
const ResumePage = lazy(() => import("./pages/resume/Resume.tsx"))
const ProjectPage = lazy(() => import("./pages/projects/Projects.tsx"))
const ContactPage = lazy(() => import("./pages/contact/Contact.tsx"))


import NotFoundPage from "./pages/notfound/NotFound.tsx";
import Loading from "./components/loadings/Loadings.tsx";

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
