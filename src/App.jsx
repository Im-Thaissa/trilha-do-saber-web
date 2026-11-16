import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Inicio from './pages/Inicio'
import Sobre from './pages/Sobre'
import Funcionalidades from './pages/Funcionalidades'
import Tecnologias from './pages/Tecnologias'
import Equipe from './pages/Equipe'
import Contato from './pages/Contato'
import NaoEncontrada from './pages/NaoEncontrada'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
