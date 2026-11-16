export default function Card({ icone, titulo, children }) {
  return (
    <article className="card">
      {icone && <span className="card-icone">{icone}</span>}
      <h3>{titulo}</h3>
      <p>{children}</p>
    </article>
  )
}
