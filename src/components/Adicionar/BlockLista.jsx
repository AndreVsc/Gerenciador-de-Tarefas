import React, { useState, useEffect } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from '../button/Button';
import './BlockLista.css';
import DeleteBlock from './DeleteBlock';

export default function BlockLista({ blocos, onDeleteBlock }) {
    const [show, setShow] = useState(false);
    const [selectedBlockId, setSelectedBlockId] = useState(null);

    function mostrarTudo(blocoid) {
        setSelectedBlockId(blocoid);
        setShow(true);
    }

    useEffect(() => {
        if (show) {
            // Render the DeleteBlock component when show is true
            return () => {
                setSelectedBlockId(null);
                setShow(false);
            };
        }
    }, [show]);

    return (
        <>
            <ul id='listBlocks'>
                {blocos.map((bloco) => (
                    <li key={bloco.id}>
                        <div id='containBlock'>
                            <p id='idBlock'>{bloco.id}#</p>
                            <p id='nameBlock'>{bloco.name}</p>
                            <div><p>{bloco.qtd}</p></div>
                            <div id='buttonsBlock'>
                                <Button func={() => mostrarTudo(bloco.id)} value={<RiDeleteBin5Line fontSize={15} />} classN='bnt-b' />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {show && <DeleteBlock reset={setShow} bloco={selectedBlockId} func={onDeleteBlock} />}
        </>
    );
}
