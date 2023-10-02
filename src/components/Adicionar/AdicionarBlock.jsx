import React, { useState } from 'react';
import Button from "../button/Button";
import BlockLista from './BlockLista';
import './AdicionarBlock.css';

export default function AdicionarBlock() {
    const [block, setBlock] = useState([]);
    const [id, setId] = useState(0);

    const adicionarBlock = () => {
        const novoBloco = { id, name: `Bloco ${id + 1}`, qtd: 0 };
        setBlock([...block, novoBloco]);
        setId(id + 1);
    };

    const onDeleteBlock = (blocoId) => {
        const novaListaDeBlocos = block.filter((bloco) => bloco.id !== blocoId);
        setBlock(novaListaDeBlocos);
      };

    return (
        <>
            <div className='containerAdicionar'>
                <div className='settingsAdicionar'>
                    <input type="text" />
                    <Button func={adicionarBlock} value='+ Novo' classN='bnt-b' />
                </div>
                <BlockLista blocos={block} onDeleteBlock={onDeleteBlock}/>
            </div>
        </>
    );
}
