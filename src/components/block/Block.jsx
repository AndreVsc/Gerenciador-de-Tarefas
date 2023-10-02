import './Block.css';
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from '../button/Button.jsx';

export default function Block({id,name,qtd,func}){

    const handleDelete = () => {
        func(id);
      };

    return(
        <li key={id}>
            <div id='containBlock'>
                <div id='nameBlock'>{name}</div>
                <div>{qtd ? <p>{qtd}</p> : <p>0</p>}</div>
                <div id='buttonsBlock'>
                    <Button func={handleDelete} value={<RiDeleteBin5Line fontSize={15}/>} classN='bnt-b'/>
                </div>
            </div>
        </li>
    )
}

