import React from "react"
import  { useState } from 'react'
import "./App.css"


// SINTAXE




function App() {

 const [gastos, setGastos] = useState([]) // Lista de gastos
 const [descricao, setDescricao] = useState ("") // Descrição do gasto
 const [valor , setValor] = useState("") // Valor do gasto


  const adicionarGasto = (e) => {
    e.preventDefault() // Evita o recarregamento da página

   // Valida os campos
   if (!descricao || !valor) {
    alert("Por favor, preencha todos os dados")
   }

   // Criar um novo gasto
   const novoGasto = {
    id: Date.now(), // Usa o timestrap como ID único
    descricao,
    valor: parseFloat(valor) // Converte o valor para número
   }

   // Adicionar um novo gasto a lista
   setGastos ((gastosAnteriores) => [...gastosAnteriores, novoGasto])

   // Limpar os campos do formulário
   setDescricao("")
   setValor("")
  }


   // Remover um gasto
  const removerGasto = (id) => {
    const gastosAtualizados = gastos.filter((gasto) => gasto.id !== id)
    setGastos(gastosAtualizados)
  }

  // Calcula o total gasto
  const totalGasto = gastos.reduce((soma, gasto) => soma + gasto.valor, 0)



  return (
    <div className="App">
      <h1>Controle de Gastos</h1>
      <form onSubmit={adicionarGasto}>
        <input
          type="text"
          placeholder="Descrição (ex: Almoço)"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Valor (ex: 50.00)"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          step="0.01"
          required
        />
        <button type="submit">Adicionar Gasto</button>
      </form>

      <h2>Lista de Gastos</h2>
      <ul>
        {gastos.map((gasto) => (
          <li key={gasto.id}>
            <span> {gasto.descricao} - </span>
            <span> R$ {gasto.valor.toFixed(2)} </span>
            <button onClick={() => removerGasto(gasto.id)}>Remover</button>
          </li>
        ))}
      </ul>

      <h2>Total Gasto:</h2>
      <p> R$ {totalGasto.toFixed(2)}</p>
    </div>
  );
}


export default App
