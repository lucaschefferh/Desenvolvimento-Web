import ListaHabilidades from '../components/ListaHabilidades'

function Habilidades() {
  const frontend = ['HTML', 'CSS', 'JavaScript', 'React']
  const outras = ['Git', 'SQL', 'Python']

  return (
    <section>
      <h2>Habilidades</h2>
      <div className="grid">
        <ListaHabilidades titulo="Front-end" habilidades={frontend} />
        <ListaHabilidades titulo="Outras" habilidades={outras} />
      </div>
    </section>
  )
}

export default Habilidades
