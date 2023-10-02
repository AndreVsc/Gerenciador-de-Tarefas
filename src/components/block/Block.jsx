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
                <p id='idBlock'>{id}#</p>
                <p id='nameBlock'>{name}</p>
                <div><p>{qtd}</p></div>
                <div id='buttonsBlock'>
                    <Button func={handleDelete} value={<RiDeleteBin5Line fontSize={15}/>} classN='bnt-b'/>
                </div>
            </div>
        </li>
    )
}

