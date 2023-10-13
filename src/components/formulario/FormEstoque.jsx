import React from 'react';
import './FormEstoque.css';
function FormEstoque() {
  return (
    <div className='containerForm'>
            <form id='formEstoque'>
                <div id='inputsEstoque'>
                    <input id='inputChild-1' className='inputText' type="text" placeholder='Nome do Produto' />
                    <input id='inputChild-2' className='inputText' type="text" placeholder='Marca'/>
                    <input id='inputChild-3' className='inputText' type="number" placeholder='Quantidade'/>
                    <input id='inputChild-4' className='inputText' type="text" placeholder='Fornecedor'/>
                    <input id='inputChild-5' className='inputText' type="number" placeholder='Minimo'/>
                    <input id='inputChild-6' className='inputText' type="text" placeholder='Valor de Venda'/>
                    <input id='inputChild-7' className='inputText' type="text" placeholder='Custo do Produto'/>
                </div>
                    <textarea className='inputArea' type="text" placeholder='Obs'/>
                <input id='inputBnt' className='bnt-b' type="submit" value={"Criar Produto"} />
            </form>
    </div>
  ) 
}
export default FormEstoque