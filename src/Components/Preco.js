import React from 'react'
import './Preco.css'


export default function Preco(props) {
  return (
    <div className="preco">
      {props.semPreco
        ?
        (<div className="preco-novo centralizado">
          <p>Pague em até</p>
          <span>12x Sem Juros</span>
        </div>)
        :
        (
        <>
        <div className="preco-antigo">
          <p>De
            <s>{props.precoAntigo}</s>
          </p>
        </div>
        <div className="preco-novo">
          <p>Por</p>
          <span>R$ {props.preco}</span>
        </div>
        <div className="condicoes">
          <p>Ou {props.condicoesParcela}X de R${props.valorParcela}</p>
        </div>
        </>)}
    </div>
  )

}
