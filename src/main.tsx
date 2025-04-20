import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import TrackingInputPage from './Pages/TrackingInputPage.tsx'
import TrackingResultPage from './Pages/TrackingResultPage.tsx'
import Adminpage from './Pages/Adminpage.tsx'
const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='track' element={<TrackingInputPage />} />
       <Route path='result/:id' element={<TrackingResultPage />} />
      <Route path='admin' element={<Adminpage />} /> 
    </Route>
  )
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
  
   
  </StrictMode>,
)
