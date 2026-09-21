import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Habilidades from './pages/Habilidades'
import ContadorPage from './pages/ContadorPage'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/contador" element={<ContadorPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
