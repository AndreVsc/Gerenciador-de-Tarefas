import './PaginaHistorico.css';
import React from 'react';

import TimeLine from '../../components/LinhaTempo/TimeLine';

export default function PaginaHistorico() {
  return (
    <div className='containerHistorico'>
        <TimeLine/>
    </div>
  )
}
