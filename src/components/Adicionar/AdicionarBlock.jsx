import React, { useState } from 'react';
import Button from "../button/Button";
import Block from "../block/Block";

export default function AdicionarBlock() {
    const [count, setCount] = useState(1);
    const [blockAdd, setBlockAdd] = useState([]);

    const adicionar = () => {
        const novoBlock = (
            <Block
                key={count}
                id={count}
                value={10}
                func={() => removerBlock(count)} // Passa o id como argumento
            ></Block>
        );
        setBlockAdd([...blockAdd, novoBlock]);
        setCount(count + 1);
    };

    const removerBlock = (id) => { // Recebe o id como argumento
        const novaLista = blockAdd.filter((componente) => {
            return componente.props.id !== id;
        });
        setBlockAdd(novaLista);
    };

    return (
        <>
            <Button func={adicionar} value='Adicionar' classN='bnt-b' />
            {blockAdd.map((componente) => (
                <ul key={componente.props.id}>
                    {componente}
                </ul>
            ))}
        </>
    );
}
