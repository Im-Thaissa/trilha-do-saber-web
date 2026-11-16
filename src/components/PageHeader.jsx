// Cabeçalho reutilizado no topo de cada página interna.
export default function PageHeader({ etiqueta, titulo, texto }) {
  return (
    <section className="page-header">
      <div className="container">
        <span className="etiqueta">{etiqueta}</span>
        <h1>{titulo}</h1>
        {texto && <p>{texto}</p>}
      </div>
    </section>
  )
}
