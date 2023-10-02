import React from 'react';
import Block from '../block/Block';
import './BlockLista.css'

export default function BlockLista({ blocos, onDeleteBlock }) {
    return (<ul id='listBlocks'>{blocos.map((bloco) => (<Block id={bloco.id} name={bloco.name} qtd={bloco.qtd} func={onDeleteBlock}/>))}</ul>);
}
