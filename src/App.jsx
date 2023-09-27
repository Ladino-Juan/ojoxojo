import Home from "./pages/Home"
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';


const ArtistaDaniel = lazy(() => import('./pages/DanielGallery.jsx'));
const ArtistaYojana = lazy(() => import('./pages/YojanaGallery.jsx'));

function App() {

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="/daniel_bedoya"
      element={
        <Suspense fallback={<>Loading...</>}>
          <ScrollToTop />
          <ArtistaDaniel />
        </Suspense>
      }
    />
    <Route
      path="/yojana_feria"
      element={
        <Suspense fallback={<>Loading...</>}>
          <ScrollToTop />
          <ArtistaYojana />
        </Suspense>
      }
    />
  </Routes>
  )
}

export default App
