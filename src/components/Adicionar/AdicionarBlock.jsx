import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
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
    
    useEffect(()=>{
        const storedData = localStorage.getItem("Bloco");
        const storedId = localStorage.getItem("Id");
        if (storedData) {
            setBlock(...block,JSON.parse(storedData));
            setId(JSON.parse(storedId));
        }
    },[])
    
    useEffect((storedId)=>{

        if(id>0){
            localStorage.setItem("Bloco",JSON.stringify(block));
            localStorage.setItem("Id",id);
        }else if(id==0 && storedId){
            setId(localStorage.getItem("Id"));
        }
        
    },[id])
    
    const addBlock = () => {
        if(numBlock!=1){
            const novoBloco = { id, name: `Bloco ${id + 1}`, qtd: 0 };
            setBlock([...block, novoBloco]);
            setId(id + 1);
        }
    };
    
    const alterBlock = ()=>{
        if(numBlock!=0){
            setBlock(outherBlock);
            setNumBlock(0)
        }
    }
    
    const onDeleteBlock = (blocoId) => {
        if(numBlock!=1){
            const novaListaDeBlocos = block.filter((bloco) => bloco.id !== blocoId);
            localStorage.setItem("Bloco",JSON.stringify(novaListaDeBlocos));
            setBlock(novaListaDeBlocos);
        }
    }
    
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
                    <Link className='bnt-b' to={'/estoque'}>Novo</Link>
                    <form id='containerSearch'>
                        <button type="submit" onClick={serchBlock}>{numBlock==0? (<HiSearch />) : (<AiOutlineLeft />)}</button>
                        <input placeholder='pesquisa' onChange={(e) => setSearch(e.target.value)} id='searchBlock' type="text" />
                    </form>
                </div>
                <div id='containerRolagem'>                
                    {block==''?(<p className='textp'>Nenhum Produto</p>):(<BlockLista  blocos={block} onDeleteBlock={onDeleteBlock} alter={alterBlock}/>)}
                </div>
            </div>
        </>
    );
}