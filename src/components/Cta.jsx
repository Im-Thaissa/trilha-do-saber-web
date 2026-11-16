import { Link } from 'react-router-dom'

// Chamada para ação exibida no fim das páginas.
export default function Cta() {
  return (
    <section className="secao">
      <div className="container cta">
        <h2>Quer saber mais sobre o projeto?</h2>
        <p>Fale com a equipe ou conheça o código-fonte.</p>
        <div className="botoes">
          <Link to="/contato" className="botao botao-claro">Entrar em contato</Link>
          <Link to="/equipe" className="botao botao-contorno-claro">Conhecer a equipe</Link>
        </div>
      </div>
    </section>
  )
}
