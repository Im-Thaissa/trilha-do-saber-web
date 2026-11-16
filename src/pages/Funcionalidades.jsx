import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
import Cta from '../components/Cta'
import { funcionalidades, perfis } from '../data'

export default function Funcionalidades() {
  // Perfil selecionado nas abas
  const [perfilAtivo, setPerfilAtivo] = useState(perfis[0].nome)
  const perfil = perfis.find((p) => p.nome === perfilAtivo)

  return (
    <>
      <PageHeader
        etiqueta="Funcionalidades"
        titulo="Tudo o que a plataforma faz"
        texto="Da importação da prova em PDF até o dashboard de desempenho da turma."
      />

      <section className="secao">
        <div className="container grade">
          {funcionalidades.map((f) => (
            <Card key={f.titulo} icone={f.icone} titulo={f.titulo}>{f.texto}</Card>
          ))}
        </div>
      </section>

      <section className="secao secao-alt">
        <div className="container">
          <h2 className="titulo-secao">Um painel para cada perfil</h2>
          <div className="abas" role="tablist">
            {perfis.map((p) => (
              <button
                key={p.nome}
                role="tab"
                aria-selected={p.nome === perfilAtivo}
                className={p.nome === perfilAtivo ? 'aba ativa' : 'aba'}
                onClick={() => setPerfilAtivo(p.nome)}
              >
                {p.nome}
              </button>
            ))}
          </div>
          <div className={'painel-perfil cor-' + perfil.cor} role="tabpanel">
            <h3>{perfil.nome}</h3>
            <ul>
              {perfil.itens.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <Cta />
    </>
  )
}
