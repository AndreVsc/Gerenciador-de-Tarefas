import './Button.css';
export default function Button({func,value,classN}){
    return (
        <>
            <button className={classN} id='bnt' onClick={func} >{value}</button>
        </>
    );
}