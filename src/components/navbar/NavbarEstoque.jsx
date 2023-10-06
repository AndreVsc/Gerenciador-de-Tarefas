import React from 'react';
import './NavbarEstoque.css';
import { Link } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {BsFillBoxSeamFill} from 'react-icons/bs';
import {BsFillXDiamondFill} from 'react-icons/bs';
export default function Navbar() {
  return (
    <nav className='Navbar-conatainer'>
        <ul>
            <li><BsFillXDiamondFill /></li>
            <li><Link to="/"><AiFillHome /></Link></li>
            <li><Link to="/estoque"><BsFillBoxSeamFill /></Link></li>
        </ul>
    </nav>
  )
}