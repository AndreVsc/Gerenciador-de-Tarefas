import React, { useState, useEffect } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from './../button/Button.jsx';
import './BlockLista.css';
import DeleteBlock from './DeleteBlock';
import Detalhes from '../Detalhes/Detalhes';

export default function BlockLista({ blocos, onDeleteBlock ,alter}) {

    const [show, setShow] = useState(false);
    const [detalhes, setDetalhes] = useState(false);
    const [selectedBlockId, setSelectedBlockId] = useState(null);
    const [storeData, setStoreData] = useState([]);

    function mostrarTudo(blocoid) {
        setSelectedBlockId(blocoid);
        setShow(true);
    }

    function mostrarDetalhes(blocoid) {
        setSelectedBlockId(blocoid);
        setDetalhes(true);
    }

    useEffect(()=>{
        const storedData = localStorage.getItem("produtoData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setStoreData(parsedData);
        }
    },[])

    useEffect(() => {
        if (show || detalhes) {
            alter()
            return () => {
                setSelectedBlockId(null);
                setShow(false);
                setDetalhes(false)
            };
        }
    }, [show]);

    return (
        <>
            <ul id='listBlocks'>
                {blocos.map((bloco) => (
                    <li key={bloco.id}>
                        <p id='idBlock'>{bloco.venda} R$</p>
                        <p onClick={() => mostrarDetalhes(bloco.id)} className='nomeProduto'>{bloco.produto}</p>
                        <div><p>{bloco.quantidade}x</p></div>
                        <div id='buttonsBlock'>
                        <Button func={() => mostrarTudo(bloco.id)} value={<RiDeleteBin5Line fontSize={15} />} classN='bnt-b' />
                        </div>
                    </li>
                ))}
            </ul>
            {show && <DeleteBlock reset={setShow} id={selectedBlockId} func={onDeleteBlock} />}
            {detalhes && <Detalhes reset={setDetalhes} id={selectedBlockId} storeData={storeData}/>}
        </>
    );
}
