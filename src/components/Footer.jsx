import { Link } from 'react-router-dom'
import Logo from './Logo'
import { projeto } from '../data'

const ano = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-conteudo">
        <div>
          <Logo />
          <p>{projeto.instituicao}</p>
          <p>{projeto.curso}</p>
        </div>
        <div className="footer-links">
          <Link to="/sobre">Sobre</Link>
          <Link to="/funcionalidades">Funcionalidades</Link>
          <Link to="/equipe">Equipe</Link>
          <a href={projeto.repositorio} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <p className="footer-copy">© {ano} Trilha do Saber — Trabalho de Conclusão de Curso</p>
    </footer>
  )
}
