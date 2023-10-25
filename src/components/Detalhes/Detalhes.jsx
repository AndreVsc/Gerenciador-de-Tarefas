import React from 'react';
import './Detalhes.css';
import Button from './../button/Button';
export default function Detalhes({reset,storeData,id}) {

  const blocos = [storeData.find(bloco => bloco.id === id)];

  const voltarDetalhes = () =>{
      reset(false);
  }

  return (
    <div className="overlayDetalhes" >
      {blocos.map((bloco)=>(
        <li key={bloco.id}>
          <div className="popupDetalhes">
          <div id='containerDetalhes'>
            <div className='infos'>
              <label htmlFor="produto">produto</label>
              <input id='produto' className='inputText' name='produto' type='text' placeholder={bloco.produto} disabled/>
            </div>
            <div className='infos'>
              <label htmlFor="marca">marca</label>
              <input id='marca' className='inputText' name='marca' type='text' placeholder={bloco.marca} disabled/>
            </div>
            <div className='infos'>
              <label htmlFor="quantidade">quantidade</label>
              <input id='quantidade' className='inputText' name='quantidade' type='number' placeholder={bloco.quantidade} disabled/>
            </div>
            <div className='infos'>
              <label htmlFor="fornecedor">fornecedor</label>
              <input id='fornecedor' className='inputText' name='fornecedor' type='text' placeholder={bloco.fornecedor} disabled/>
            </div>
            <div className='infos'>
              <label htmlFor="venda">venda</label>
              <input id='venda' className='inputText' name='venda' type='number' placeholder={bloco.venda} disabled/>
              </div>
            <div className='infos'>
              <label htmlFor="custo">custo</label>
              <input id='custo' className='inputText' name='custo' type='number' placeholder={bloco.custo} disabled/>
            </div>
          </div>
          <textarea id='obs' name='obs' className='inputArea' type="text" placeholder={bloco.obs} disabled/>
          <Button func={voltarDetalhes} value='Voltar' classN='bntd'/>    
        </div>
        </li>
      ))}
    </div>
  )
}
