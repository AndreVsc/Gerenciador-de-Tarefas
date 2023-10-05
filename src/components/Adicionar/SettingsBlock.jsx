import React from 'react'
import Button from "../button/Button";
function SettingsBlock({addBlock,block}) {
  return (
    <>
        <Button func={addBlock} value='+ Novo' classN='bnt-b' />
    </>
  );
}

export default SettingsBlock