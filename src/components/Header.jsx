import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { para: '/', texto: 'Início' },
  { para: '/sobre', texto: 'Sobre' },
  { para: '/funcionalidades', texto: 'Funcionalidades' },
  { para: '/tecnologias', texto: 'Tecnologias' },
  { para: '/equipe', texto: 'Equipe' },
  { para: '/contato', texto: 'Contato' },
]

export default function Header() {
  // Controla o menu no celular (aberto/fechado)
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="header">
      <div className="container header-conteudo">
        <Link to="/" onClick={() => setMenuAberto(false)}>
          <Logo />
        </Link>

        <button
          className="menu-botao"
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? '✕' : '☰'}
        </button>

        <nav className={menuAberto ? 'nav aberto' : 'nav'}>
          {links.map((link) => (
            <NavLink
              key={link.para}
              to={link.para}
              end={link.para === '/'}
              onClick={() => setMenuAberto(false)}
            >
              {link.texto}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
