import PageHeader from '../components/PageHeader'
import Cta from '../components/Cta'
import { projeto, problemaSolucao } from '../data'

export default function Sobre() {
  return (
    <>
      <PageHeader
        etiqueta="Sobre"
        titulo="Por que criamos o Trilha do Saber"
        texto="O ENADE avalia os cursos de graduação no Brasil, mas estudar para ele ainda é difícil."
      />

      <section className="secao">
        <div className="container texto-longo">
          <p>
            Encontrar um banco de questões organizado e confiável para treinar é um desafio: as provas
            de edições anteriores costumam estar disponíveis apenas em PDFs soltos, sem nenhuma
            estrutura de estudo por trás.
          </p>
          <p>
            O <strong>Trilha do Saber</strong> automatiza a importação das provas oficiais direto do PDF,
            organiza as questões por curso e ano e permite que o aluno resolva simulados enquanto o
            sistema acompanha seu desempenho, criando uma trilha de estudo personalizada, com visões
            separadas para aluno, professor, coordenador e administração.
          </p>
        </div>
      </section>

      <section className="secao secao-alt">
        <div className="container duas-colunas">
          <div className="caixa caixa-problema">
            <h2>O problema</h2>
            <ul>
              {problemaSolucao.problema.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="caixa caixa-solucao">
            <h2>A solução</h2>
            <ul>
              {problemaSolucao.solucao.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="container">
          <h2 className="titulo-secao">Informações acadêmicas</h2>
          <dl className="info-academica">
            <div><dt>Instituição</dt><dd>{projeto.instituicao}</dd></div>
            <div><dt>Curso</dt><dd>{projeto.curso}</dd></div>
            <div><dt>Orientador</dt><dd>{projeto.orientador}</dd></div>
            <div><dt>Tipo</dt><dd>Trabalho de Conclusão de Curso (PFC/TCC)</dd></div>
          </dl>
        </div>
      </section>

      <Cta />
    </>
  )
}
