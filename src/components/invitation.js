import React from 'react'
import QRCode from "react-qr-code";
import posada from '../assets/Pase_posada.jpg';
import "../index.css"
import { useSearchParams } from 'react-router-dom';

function Invitation() {
    const [id,setId] = useSearchParams();
    const valueQueryParam = id.toString();

    return (
        <div className="classSuper">
            <img className='heaven' src={posada} />
            <QRCode className='eye' value={valueQueryParam} />
        </div >
    )
}

export default Invitation
