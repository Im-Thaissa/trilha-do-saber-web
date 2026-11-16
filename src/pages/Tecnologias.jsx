import PageHeader from '../components/PageHeader'
import { tecnologias } from '../data'

export default function Tecnologias() {
  return (
    <>
      <PageHeader
        etiqueta="Tecnologias"
        titulo="Como o sistema foi construído"
        texto="Ferramentas escolhidas para garantir segurança, qualidade e facilidade de manutenção."
      />

      <section className="secao">
        <div className="container tecnologias">
          {tecnologias.map((grupo) => (
            <div key={grupo.grupo} className="tec-grupo">
              <h2>{grupo.grupo}</h2>
              <ul>
                {grupo.itens.map((t) => (
                  <li key={t.nome}>
                    <strong>{t.nome}</strong>
                    <span>{t.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="secao secao-alt">
        <div className="container texto-longo">
          <h2>Qualidade</h2>
          <p>
            O projeto conta com uma suíte de centenas de testes unitários e de integração (JUnit 5 e
            Mockito), cobrindo controllers, services e regras de negócio, com a cobertura acompanhada
            pelo JaCoCo.
          </p>
        </div>
      </section>
    </>
  )
}
