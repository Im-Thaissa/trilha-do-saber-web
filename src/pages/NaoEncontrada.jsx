import { Link } from 'react-router-dom'

export default function NaoEncontrada() {
  return (
    <section className="secao">
      <div className="container centro">
        <h1>404</h1>
        <p>Essa página saiu da trilha.</p>
        <Link to="/" className="botao">Voltar ao início</Link>
      </div>
    </section>
  )
}
