import React from 'react';
import './DeleteBlock.css';
import Button from '../button/Button';
function DeleteBlock({reset,func,bloco}) {

    const handleDelete = () =>{
        func(bloco);
        reset(false);
    }

    const cancelDelete = () =>{
        reset(false);
    }

  return (
    <div className="overlay" >
                <div className="popup">
                        <h2>Deseja excluir?</h2>
                        <div className="bnt-d">
                            <Button func={handleDelete} value='Excluir' classN='bnt-b'/>
                            <Button func={cancelDelete} value='Cancelar' classN='bnt-b'/>
                        </div>
                </div>
        </div>
  );
}

export default DeleteBlock;