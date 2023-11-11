import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './FormEstoque.css';
import { Link } from 'react-router-dom';

export default function FormEstoque() {
  const [produto, setProduto] = useState({
    produto: '',
    marca: '',
    quantidade: 0,
    fornecedor: '',
    minimo: 0,
    venda: 0,
    custo: 0,
    obs: '',
  });

  const [produtoData, setProdutoData] = useState([]);
  const [idProduto, setIdProduto] = useState(0);

  useEffect(() => {
    const storedProdutoData = JSON.parse(localStorage.getItem('produtoData')) || [];
    const storedIdProduto = parseInt(localStorage.getItem('idProduto')) || 0;

    setProdutoData(storedProdutoData);
    setIdProduto(storedIdProduto);
  }, []);

  const getCurrentDate = () => {
    const currentDate = new Date();
    return format(currentDate, 'dd/MM/yyyy');
  };

  const enviarProdutos = () => {
    const novoProduto = {
      ...produto,
      id: idProduto + 1,
      dataCriacao: getCurrentDate(),
    };

    setProdutoData([...produtoData, novoProduto]);
    localStorage.setItem('produtoData', JSON.stringify([...produtoData, novoProduto]));
    localStorage.setItem('idProduto', idProduto + 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduto((prevProduto) => ({ ...prevProduto, [name]: value }));
  };

  return (
    <div className="containerForm">
      <form id="formEstoque">
        <div id="inputsEstoque">
          <input className='inputChild inputText' name='produto' onChange={handleInputChange} type="text" placeholder='Nome do Produto' />
          <input className='inputChild-2 inputText' name='marca' onChange={handleInputChange} type="text" placeholder='Marca'/>
          <input className='inputChild-3 inputText' name='quantidade' type="number" placeholder='Quantidade'/>
          <input className='inputChild-4 inputText' name='fornecedor' onChange={handleInputChange} type="text" placeholder='Fornecedor'/>
          <input className='inputChild-5 inputText' name='minimo' onChange={handleInputChange} type="number" placeholder='Minimo'/>
          <input className='inputChild-6 inputText' name='venda' onChange={handleInputChange} type="number" placeholder='Valor de Venda'/>
          <input className='inputChild-7 inputText' name='custo' onChange={handleInputChange} type="number" placeholder='Custo do Produto'/>
        </div>
        <textarea className="inputArea" name="obs" onChange={handleInputChange} type="text" placeholder="Obs" />
        <Link to="/" onClick={enviarProdutos} id="inputBnt" className="bnt-b link-btn">
          Criar Produto
        </Link>
      </form>
    </div>
  );
}
