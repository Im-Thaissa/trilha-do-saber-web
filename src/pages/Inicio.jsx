import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Cta from '../components/Cta'
import { projeto, numeros, funcionalidades, passos } from '../data'

// Dados de exemplo para a ilustração do painel
const temasExemplo = [
  { tema: 'Banco de dados', valor: 82 },
  { tema: 'Engenharia de software', valor: 64 },
  { tema: 'Redes', valor: 41 },
  { tema: 'Algoritmos', valor: 73 },
]

export default function Inicio() {
  return (
    <>
      {/* Seção principal (hero) */}
      <section className="hero">
        <div className="container hero-conteudo">
          <div>
            <span className="etiqueta">TCC · Sistemas de Informação · UMC</span>
            <h1>
              Estude para o <span className="destaque">ENADE</span> com uma trilha feita para você
            </h1>
            <p className="hero-texto">{projeto.resumo}</p>
            <div className="botoes">
              <Link to="/funcionalidades" className="botao">Ver funcionalidades</Link>
              <Link to="/sobre" className="botao botao-contorno">Sobre o projeto</Link>
            </div>
          </div>

          {/* Ilustração de um painel de desempenho */}
          <div className="hero-painel" aria-hidden="true">
            <div className="painel-topo">
              <span /> <span /> <span />
            </div>
            <p className="painel-titulo">Seu desempenho por tema</p>
            {temasExemplo.map(({ tema, valor }) => (
              <div key={tema} className="barra-linha">
                <span>{tema}</span>
                <div className="barra">
                  <div
                    className={valor < 50 ? 'barra-cheia fraca' : 'barra-cheia'}
                    style={{ width: valor + '%' }}
                  />
                </div>
                <strong>{valor}%</strong>
              </div>
            ))}
            <p className="painel-dica">💡 Reforce: <b>Redes</b></p>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="container numeros">
        {numeros.map((n) => (
          <div key={n.legenda} className="numero">
            <strong>{n.valor}</strong>
            <span>{n.legenda}</span>
          </div>
        ))}
      </section>

      {/* Como funciona */}
      <section className="secao">
        <div className="container">
          <h2 className="titulo-secao">Como funciona</h2>
          <ol className="passos">
            {passos.map((p, i) => (
              <li key={p.titulo}>
                <span className="passo-numero">{i + 1}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Destaques: só as 3 primeiras funcionalidades */}
      <section className="secao secao-alt">
        <div className="container">
          <h2 className="titulo-secao">Destaques</h2>
          <div className="grade">
            {funcionalidades.slice(0, 3).map((f) => (
              <Card key={f.titulo} icone={f.icone} titulo={f.titulo}>{f.texto}</Card>
            ))}
          </div>
          <p className="centro">
            <Link to="/funcionalidades" className="link-seta">Ver todas as funcionalidades →</Link>
          </p>
        </div>
      </section>

      <Cta />
    </>
  )
}
