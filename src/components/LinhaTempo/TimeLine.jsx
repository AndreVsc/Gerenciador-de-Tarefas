import './TimeLine.css';

function TimeLine() {
  return (
    <div className='containerTime'>
        <div className='containerRecent'>
          <p><strong>tipo</strong></p>
          <p><strong>data</strong></p>
          <p><strong>produto</strong></p>
          <p><strong>original</strong></p>
          <p><strong>alteração</strong></p>
        </div>
        <div className='containerLeg'>
          <div className='pLeg'><p><div className='greenLed'></div>adição</p></div>
          <div className='pLeg'><p><div className='redLed'></div>remoção</p></div>
          <div className='pLeg'><p><div className='blueLed'></div>criação</p></div>
        </div>
        <div className='containerHist'>
          
        </div>
    </div>
  );
}

export default TimeLine