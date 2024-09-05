import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'

const Header = lazy(() => import('./components/Header/Header'));
const Footer = lazy(() => import('./components/Footer/Footer'));

import Loader from './components/Loader/Loader'

const PortfolioPage = lazy(()=> import('./pages/PortfolioPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </Suspense>
  )
}

export default App
