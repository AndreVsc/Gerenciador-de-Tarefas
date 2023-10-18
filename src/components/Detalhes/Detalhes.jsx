import React from 'react';
import './Detalhes.css';
import Button from '../button/Button';
export default function Detalhes({reset,storeData,id}) {

  const blocos = [storeData.find(bloco => bloco.id === id)];

    const cancelDelete = () =>{
        reset(false);
    }


  return (
    <div className="overlayDetalhes" >
                {blocos.map((bloco)=>(
                    <div className="popupDetalhes">
                      <div id='containerDetalhes'>
                        <div className='infos'>
                        <label htmlFor="produto">produto</label>
                        <input className='inputText' name='produto' type='text' value={bloco.produto} disabled/>
                        </div>
                        <div className='infos'>
                        <label htmlFor="marca">marca</label>
                        <input className='inputText' name='marca' type='text' value={bloco.marca} disabled/>
                        </div>
                        <div className='infos'>
                          <label htmlFor="quantidade">quantidade</label>
                          <input className='inputText' name='quantidade' type='number' placeholder={bloco.quantidade} />
                        </div>
                        <div className='infos'>
                          <label htmlFor="fornecedor">fornecedor</label>
                          <input className='inputText' name='fornecedor' type='text' value={bloco.fornecedor} disabled/>
                        </div>
                        <div className='infos'>
                          <label htmlFor="venda">venda</label>
                          <input className='inputText' name='venda' type='number' placeholder={bloco.venda} />
                        </div>
                        <div className='infos'>
                          <label htmlFor="custo">custo</label>
                          <input className='inputText' name='custo' type='number' placeholder={bloco.custo}/>
                        </div>
                    </div>
                    <textarea className='inputArea' type="text" placeholder={bloco.obs}/>
                    <Button func={cancelDelete} value='Voltar' classN='bntd'/>    
                </div>
                ))}
        </div>
  )
}