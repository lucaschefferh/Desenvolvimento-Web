import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <h2>Bem-vindo!</h2>
      <p>
        Esse é o meu primeiro app em React, feito para a matéria de
        Desenvolvimento Web. Ele usa componentes e TSX.
      </p>

      <div className="botoes">
        <Link to="/perfil" className="botao">Ver perfil</Link>
        <Link to="/habilidades" className="botao">Ver habilidades</Link>
      </div>
    </section>
  )
}

export default Home
