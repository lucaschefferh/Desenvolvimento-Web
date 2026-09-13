import CardPerfil from '../components/CardPerfil'

function Perfil() {
  return (
    <section>
      <h2>Perfil</h2>
      <CardPerfil
        nome="Lucas"
        curso="Desenvolvimento Web - 6º semestre"
        descricao="Estou aprendendo React e TypeScript. Gosto de programar e criar sites."
      />
    </section>
  )
}

export default Perfil
