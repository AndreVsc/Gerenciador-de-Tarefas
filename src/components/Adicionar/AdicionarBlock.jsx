import React, { useState} from 'react';
import SettingsBlock from './SettingsBlock';
import BlockLista from './BlockLista';
import {HiSearch} from 'react-icons/hi';
import {AiOutlineLeft} from 'react-icons/ai';
import './AdicionarBlock.css';

export default function AdicionarBlock() {
    const [block, setBlock] = useState([]);
    const [outherBlock, setOutherBlock] = useState([]);
    const [search, setSearch] = useState([]);
    const [numBlock, setNumBlock] = useState(0);
    const [id, setId] = useState(0);

    const addBlock = () => {
        if(numBlock!=1){
            const novoBloco = { id, name: `Bloco ${id + 1}`, qtd: 0 };
            setBlock([...block, novoBloco]);
            setId(id + 1);
        }
    };
    
    
    const onDeleteBlock = (blocoId) => {
        const novaListaDeBlocos = block.filter((bloco) => bloco.id !== blocoId);
        setBlock(novaListaDeBlocos);
    };
    
    const serchBlock = (e) => {
        e.preventDefault()
        setOutherBlock(block);
        const results = block.filter((bloco)=> bloco.name.includes(search) );
        if(search!="" && numBlock===0){
            setBlock(results);
            setNumBlock(numBlock+1);
        }else if(search=="" && numBlock===0){
            return null;
        }else if(search=="" || search!="" && numBlock===1){
            setBlock(outherBlock);
            setNumBlock(numBlock-1);
        }
    }

    return (
        <>
            <div className='containerAdicionar'>
                <div className='settingsAdicionar'>
                    <SettingsBlock addBlock={addBlock}/>
                    <form id='containerSearch'>
                        <button type="submit" onClick={serchBlock}>{numBlock==0? (<HiSearch />) : (<AiOutlineLeft />)}</button>
                        <input onChange={(e) => setSearch(e.target.value)} id='searchBlock' type="text" />
                    </form>
                </div>
                <div id='containerRolagem'>                
                    {block==''?(<p id='textp'>Nenhum Produto</p>):(<BlockLista blocos={block} onDeleteBlock={onDeleteBlock}/>)}
                </div>
            </div>
        </>
    );
}
