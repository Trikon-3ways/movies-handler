
import './App.css'
import { MovieCard } from './components/MovieCard'
import { Home } from './pages/home'
import { Favourites } from './pages/favourites'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { MovieProvider } from './contexts/MovieContexts'

function App() {

  return (
    <>
    <MovieProvider>
      <div className="bat-signal"></div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourites' element={<Favourites />} />
      </Routes>
      </MovieProvider>
    </>
    
  )
}

export default App
