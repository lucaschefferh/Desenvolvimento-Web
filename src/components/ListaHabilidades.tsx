type ListaHabilidadesProps = {
  titulo: string
  habilidades: string[]
}

function ListaHabilidades({ titulo, habilidades }: ListaHabilidadesProps) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <ul className="lista">
        {habilidades.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListaHabilidades
