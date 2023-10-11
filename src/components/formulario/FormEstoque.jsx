import React from 'react';
import './FormEstoque.css';
function FormEstoque() {
  return (
    <div className='containerForm'>
        <div>
            <form action="">
                <p>O formulário de adição de produto é onde você insere informações sobre um novo produto no sistema. Ele possui campos para detalhes como nome, preço, quantidade e descrição, garantindo que todas as informações essenciais sejam registradas de forma organizada para facilitar a adição eficiente de novos produtos.</p>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="submit" />
            </form>
        </div>
    </div>
  )
}

export default FormEstoque