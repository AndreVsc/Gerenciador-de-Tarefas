import React from 'react';
import './TimeLine.css';

function TimeLine() {
  return (
    <div className='containerTime'>
        <p>Ultima alteração</p>
        <div className='containerRecent'>
        </div>
        <p>Histórico</p>
        <div className='containerHist'>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />   
          <input type="text" />
          <input type="text" />
        </div>
    </div>
  );
}

export default TimeLine