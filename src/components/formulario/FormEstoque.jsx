import React from 'react';
import { useState,useEffect } from 'react';
import './FormEstoque.css';
import { Link } from 'react-router-dom';

export default function FormEstoque() {

  const [produtoData, setProdutoData] = useState([]);
  const [produto, setProduto] = useState([]);
  const [idProduto, setIdProduto] = useState(0);
  
  useEffect(()=>{
    // Certifique-se de que produtoData seja uma matriz (array)
    setProdutoData(JSON.parse(localStorage.getItem('produtoData')) || []);
    setIdProduto(parseInt(localStorage.getItem('idProduto')) || 0);
  },[])
  
  function enviarProdutos() {
    // Incremente o ID antes de associá-lo ao novo produto
    const novoProduto = { ...produto, id: idProduto + 1 };
    // Adicione o novo produto à matriz
    setProdutoData(produtoData.push(novoProduto));
    // Atualize o localStorage com os dados atualizados
    localStorage.setItem('produtoData', JSON.stringify(produtoData));
    localStorage.setItem('idProduto',idProduto+1);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };


  return (
    <div className='containerForm'>
            <form id='formEstoque'>
                <div id='inputsEstoque'>
                    <input className='inputChild-1 inputText' name='produto' value={produto.produto} onChange={handleInputChange} type="text" placeholder='Nome do Produto' />
                    <input className='inputChild-2 inputText' name='marca' value={produto.marca} onChange={handleInputChange} type="text" placeholder='Marca'/>
                    <input className='inputChild-3 inputText' name='quantidade' value={produto.quantidade} onChange={handleInputChange} type="number" placeholder='Quantidade'/>
                    <input className='inputChild-4 inputText' name='fornecedor' value={produto.fornecedor} onChange={handleInputChange} type="text" placeholder='Fornecedor'/>
                    <input className='inputChild-5 inputText' name='minimo' value={produto.minimo} onChange={handleInputChange} type="number" placeholder='Minimo'/>
                    <input className='inputChild-6 inputText' name='venda' value={produto.venda} onChange={handleInputChange} type="number" placeholder='Valor de Venda'/>
                    <input className='inputChild-7 inputText' name='custo' value={produto.custo} onChange={handleInputChange} type="number" placeholder='Custo do Produto'/>
                </div>
                <textarea className='inputArea'  name='obs' value={produto.obs} onChange={handleInputChange} type="text" placeholder='Obs'/>
                <Link to="/" onClick={enviarProdutos} id='inputBnt' className='bnt-b link-btn'> Criar Produto </Link> 
            </form>
    </div>
  );
}