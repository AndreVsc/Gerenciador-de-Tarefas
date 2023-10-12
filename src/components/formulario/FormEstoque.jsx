import React from 'react';
import './FormEstoque.css';
function FormEstoque() {
  return (
    <div className='containerForm'>
        <div>
            <form id='formEstoque'>
                <div id='inputsEstoque'>
                  <input className='inputText' type="text" placeholder='Nome do Produto' />
                  <input className='inputText' type="text" placeholder='Marca'/>
                  <input className='inputText' type="number" placeholder='Quantidade'/>
                  <input className='inputText' type="text" placeholder='Valor de Venda'/>
                  <input className='inputText' type="text" placeholder='Custo do Produto'/>
                  <input className='inputText' type="text" placeholder='Quantidade MIN'/>
                </div>
                <textarea id="w3review" name="w3review" rows="4" cols="50"/>
                <input id='inputBnt' className='bnt-b' type="submit" value={"Criar Produto"} />
            </form>
        </div>
    </div>
  )
}

export default FormEstoque