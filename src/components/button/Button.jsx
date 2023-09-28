import './Button.css';
export default function Button({func,value}){
    return (
        <>
            <button id='bnt' onClick={func}>{value}</button>
        </>
    );
}