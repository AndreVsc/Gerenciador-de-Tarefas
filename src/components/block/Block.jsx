import './Block.css';
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from '../button/Button.jsx';
export default function Block({id,value,key,func}){
    return(
        <li key={key}>
            <div id='containBlock'>
                <div id='nameBlock'>{id ? <><p>{id}#</p><p>Produto</p></> : <><p>????#</p><p>Produto</p></>}</div>
                <div>{value ? <p>{value}</p> : <p>0</p>}</div>
                <div id='buttonsBlock'>
                    <Button func={func}value={<RiDeleteBin5Line fontSize={15}/>} classN='bnt-b'/>
                </div>
            </div>
        </li>
    )
}