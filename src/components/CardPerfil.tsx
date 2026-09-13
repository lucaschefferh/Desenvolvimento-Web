type CardPerfilProps = {
  nome: string
  curso: string
  descricao: string
}

function CardPerfil({ nome, curso, descricao }: CardPerfilProps) {
  // pega a primeira letra do nome pra usar como "foto"
  const inicial = nome.charAt(0)

  return (
    <div className="card">
      <div className="avatar">{inicial}</div>
      <h2>{nome}</h2>
      <p className="curso">{curso}</p>
      <p>{descricao}</p>
    </div>
  )
}

export default CardPerfil
