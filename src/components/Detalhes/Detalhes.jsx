import React from 'react';
import './Detalhes.css';
import Button from '../button/Button';
export default function Detalhes({reset,storeData}) {

    const cancelDelete = () =>{
        reset(false);
    }


  return (
    <div className="overlay" >
                <div className="popup">
                    <label classNamehtmlFor="produto">produto</label>
                    <input name='produto' className='inputText' type='text' value={storeData.produto} disabled/>
                    <label htmlFor="marca">marca</label>
                    <input name='marca' className='inputText' type='text' value={storeData.marca} disabled/>
                    <label htmlFor="quantidade">quantidade</label>
                    <input name='quantidade'className='inputText' type='number' placeholder={storeData.quantidade} />
                    <label htmlFor="fornecedor">fornecedor</label>
                    <input name='fornecedor' className='inputText' type='text' value={storeData.fornecedor} disabled/>
                    <label htmlFor="venda">venda</label>
                    <input name='venda' className='inputText' type='number' placeholder={storeData.venda} />
                    <label htmlFor="custo">custo</label>
                    <input name='custo' className='inputText' type='number' placeholder={storeData.custo}/>
                    <textarea className='inputArea' type="text" placeholder={storeData.obs}/>
                    <Button func={cancelDelete} value='Voltar' classN='bnt-b'/>    
                </div>
        </div>
  );
}