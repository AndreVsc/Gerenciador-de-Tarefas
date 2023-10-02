import React from 'react';
import Block from '../block/Block';

export default function BlockLista({ blocos, onDeleteBlock }) {
    return (<ul>{blocos.map((bloco) => (<Block id={bloco.id} name={bloco.name} qtd={bloco.qtd} func={onDeleteBlock}/>))}</ul>);
}
