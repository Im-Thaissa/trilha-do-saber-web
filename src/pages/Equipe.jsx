import PageHeader from '../components/PageHeader'
import { equipe, projeto } from '../data'

// Gera as iniciais a partir do nome (ex.: "Derick Alves Maschio" -> "DM")
function iniciais(nome) {
  const partes = nome.split(' ')
  return partes[0][0] + partes[partes.length - 1][0]
}

export default function Equipe() {
  return (
    <>
      <PageHeader
        etiqueta="Equipe"
        titulo="Quem faz o Trilha do Saber"
        texto={'Alunos de ' + projeto.curso + ' da ' + projeto.instituicao + '.'}
      />

      <section className="secao">
        <div className="container grade">
          {equipe.map((pessoa) => (
            <article key={pessoa.nome} className="card membro">
              <span className="avatar">{iniciais(pessoa.nome)}</span>
              <h3>{pessoa.nome}</h3>
              <p>{pessoa.papel}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="secao secao-alt">
        <div className="container centro">
          <h2>Orientação</h2>
          <p>{projeto.orientador}</p>
        </div>
      </section>
    </>
  )
}
