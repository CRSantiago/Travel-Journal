import React from 'react'
import globeIcon from '../images/globe.png'

export default function Header(){
    return(
        <div className="header">
            <img src={globeIcon} alt="globe icon" className="header--icon" />
            <p>my travel journal.</p>
        </div>
    )
}