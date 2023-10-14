import React, { useEffect } from 'react';
import { useState } from 'react';
import './FormEstoque.css';
import { Link } from 'react-router-dom';

export default function FormEstoque() {

  const [produtoData, setProdutoData] = useState({
    produto: "",
    marca: "",
    quantidade: "",
    fornecedor: "",
    minimo: "",
    venda: "",
    custo: "",
    obs: ""
  });

  function enviarProduto(){
    localStorage.setItem('produtoData', JSON.stringify(produtoData));
  }

  useEffect(()=>{
    setProdutoData({
      produto: "",
      marca: "",
      quantidade: "",
      fornecedor: "",
      minimo: "",
      venda: "",
      custo: "",
      obs: ""
    });
  },[])

  return (
    <div className='containerForm'>
            <form id='formEstoque'>
                <div id='inputsEstoque'>
                    <input id='inputChild-1' onChange={(e)=>setProdutoData({ ...produtoData, produto: e.target.value })} className='inputText' type="text" placeholder='Nome do Produto' />
                    <input id='inputChild-2' onChange={(e)=>setProdutoData({ ...produtoData, marca: e.target.value })} className='inputText' type="text" placeholder='Marca'/>
                    <input id='inputChild-3' onChange={(e)=>setProdutoData({ ...produtoData, quantidade: e.target.value })} className='inputText' type="number" placeholder='Quantidade'/>
                    <input id='inputChild-4' onChange={(e)=>setProdutoData({ ...produtoData, fornecedor: e.target.value })} className='inputText' type="text" placeholder='Fornecedor'/>
                    <input id='inputChild-5' onChange={(e)=>setProdutoData({ ...produtoData, minimo: e.target.value })} className='inputText' type="number" placeholder='Minimo'/>
                    <input id='inputChild-6' onChange={(e)=>setProdutoData({ ...produtoData, venda: e.target.value })} className='inputText' type="number" placeholder='Valor de Venda'/>
                    <input id='inputChild-7' onChange={(e)=>setProdutoData({ ...produtoData, custo: e.target.value })} className='inputText' type="number" placeholder='Custo do Produto'/>
                </div>
                <textarea className='inputArea'  onChange={(e)=>setProdutoData({ ...produtoData, obs: e.target.value })} type="text" placeholder='Obs'/>
                <Link to="/" onClick={enviarProduto} id='inputBnt' className='bnt-b link-btn'> Criar Produto </Link> 
            </form>
    </div>
  ) 
}