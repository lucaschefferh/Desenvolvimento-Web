import { useState, useEffect } from 'react'

function Contador() {
  const [contador, setContador] = useState(0)
  const [step, setStep] = useState(1)
  const [minimo, setMinimo] = useState(0)
  const [maximo, setMaximo] = useState(10)

  // se o mínimo ou o máximo mudar, ajusta o contador para ficar dentro do intervalo
  useEffect(() => {
    if (contador < minimo) {
      setContador(minimo)
    } else if (contador > maximo) {
      setContador(maximo)
    }
  }, [minimo, maximo])

  function incrementar() {
    if (contador + step > maximo) {
      setContador(maximo)
    } else {
      setContador(contador + step)
    }
  }

  function decrementar() {
    if (contador - step < minimo) {
      setContador(minimo)
    } else {
      setContador(contador - step)
    }
  }

  function resetar() {
    if (minimo > 0) {
      setContador(minimo)
    } else {
      setContador(0)
    }
  }

  function mudarStep(valor: number) {
    if (valor > 0) {
      setStep(valor)
    }
  }

  function mudarMinimo(valor: number) {
    if (valor <= maximo) {
      setMinimo(valor)
    }
  }

  function mudarMaximo(valor: number) {
    if (valor >= minimo) {
      setMaximo(valor)
    }
  }

  return (
    <div className="card contador">
      <h2 className="valor">{contador}</h2>

      <div className="botoes">
        <button onClick={decrementar}>-</button>
        <button onClick={resetar}>Resetar</button>
        <button onClick={incrementar}>+</button>
      </div>

      <div className="campos">
        <label>
          Step
          <input type="number" value={step} min={1} onChange={(e) => mudarStep(Number(e.target.value))} />
        </label>
        <label>
          Mínimo
          <input type="number" value={minimo} onChange={(e) => mudarMinimo(Number(e.target.value))} />
        </label>
        <label>
          Máximo
          <input type="number" value={maximo} onChange={(e) => mudarMaximo(Number(e.target.value))} />
        </label>
      </div>
    </div>
  )
}

export default Contador
