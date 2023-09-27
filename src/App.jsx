import Home from "./pages/Home"
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
const ArtistaDaniel = lazy(() => import('./pages/DanielGallery.jsx'));

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
  </Routes>
  )
}

export default App
