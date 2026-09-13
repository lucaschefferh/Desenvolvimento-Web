import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <h1>Meu App</h1>
      <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/perfil">Perfil</NavLink>
        <NavLink to="/habilidades">Habilidades</NavLink>
      </nav>
    </header>
  )
}

export default Header
