import React from 'react'
import './PaginaInicial.css';
import AdicionarBlock from '../../components/Adicionar/AdicionarBlock'
function PaginaInicial() {
  return (
    <div className='containerInicial'>
        <div className='componenteInicial'>
          <AdicionarBlock />
        </div>
    </div>
  )
}

export default PaginaInicial;