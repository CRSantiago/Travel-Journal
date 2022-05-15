import React from "react"
import pinIcon from '../images/pin.png'

export default function Card(props){
    const image = require(`../images/${props.item.coverImg}`)
    return (
        <div className="card">
            <img src={image} alt="travel" className="card--image"/>
            <div className="card--content">
                <div className="content--location">
                    <div className="location">
                        <img src={pinIcon} alt="pin icon" className="pin--icon" />
                        <p>{props.item.country}</p>
                    </div>
                    <a href={props.item.googleLink} className="location--link"><p>View on Google Maps</p></a>
                </div>
                <h2>{props.item.location}</h2>
                <p className="date--range">{props.item.dateRange.startDate} - {props.item.dateRange.endDate}</p>
                <p>{props.item.summary}</p>
            </div>
        </div>
    )
}