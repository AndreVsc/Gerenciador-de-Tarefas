import React, { useState ,useEffect} from 'react';
import SettingsBlock from './SettingsBlock';
import BlockLista from './BlockLista';
import './AdicionarBlock.css';

export default function AdicionarBlock() {
    const [block, setBlock] = useState([]);
    const [outherBlock, setOutherBlock] = useState([]);
    const [serch, setSerch] = useState([]);
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
        const results = block.filter((bloco)=> bloco.name===serch);
        if(serch!="" && numBlock===0){
            setBlock(results);
            setNumBlock(numBlock+1);
        }else if(serch=="" && numBlock===0){
            return null;
        }else if(serch=="" || serch!="" && numBlock===1){
            setBlock(outherBlock);
            setNumBlock(numBlock-1);
        }
    }

    return (
        <>
            <div className='containerAdicionar'>
                <div className='settingsAdicionar'>
                    <SettingsBlock addBlock={addBlock}/>
                    <form id='containerSerch'>
                        <button type="submit" onClick={serchBlock}>S</button>
                        <input onChange={(e) => setSerch(e.target.value)} id='serchBlock' type="text" />
                    </form>
                </div>
                <div id='containerRolagem'>                
                    <BlockLista blocos={block} onDeleteBlock={onDeleteBlock}/>
                </div>
            </div>
        </>
    );
}
