import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { projeto } from '../data'

const formVazio = { nome: '', email: '', mensagem: '' }

export default function Contato() {
  const [form, setForm] = useState(formVazio)
  const [erro, setErro] = useState('')
  const [enviado, setEnviado] = useState(false)

  // Atualiza o campo que foi digitado
  function alterar(evento) {
    setForm({ ...form, [evento.target.name]: evento.target.value })
    setEnviado(false)
  }

  function enviar(evento) {
    evento.preventDefault()

    if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) {
      setErro('Preencha todos os campos.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setErro('Informe um e-mail válido.')
      return
    }

    // Site apenas de apresentação: não há servidor para receber a mensagem.
    setErro('')
    setEnviado(true)
    setForm(formVazio)
  }

  return (
    <>
      <PageHeader
        etiqueta="Contato"
        titulo="Fale com a equipe"
        texto="Dúvidas, sugestões ou interesse em usar a plataforma? Mande uma mensagem."
      />

      <section className="secao">
        <div className="container duas-colunas">
          <form className="formulario" onSubmit={enviar} noValidate>
            <label>
              Nome
              <input name="nome" value={form.nome} onChange={alterar} placeholder="Seu nome" />
            </label>
            <label>
              E-mail
              <input name="email" type="email" value={form.email} onChange={alterar} placeholder="voce@email.com" />
            </label>
            <label>
              Mensagem
              <textarea name="mensagem" rows="5" value={form.mensagem} onChange={alterar} placeholder="Escreva sua mensagem" />
            </label>

            {erro && <p className="alerta alerta-erro">{erro}</p>}
            {enviado && <p className="alerta alerta-sucesso">Mensagem enviada! Obrigado pelo contato.</p>}

            <button type="submit" className="botao">Enviar mensagem</button>
          </form>

          <div className="caixa">
            <h2>Outras formas</h2>
            <p><strong>Instituição:</strong> {projeto.instituicao}</p>
            <p><strong>Curso:</strong> {projeto.curso}</p>
            <p>
              <strong>Código-fonte:</strong>{' '}
              <a href={projeto.repositorio} target="_blank" rel="noreferrer">GitHub do projeto</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
