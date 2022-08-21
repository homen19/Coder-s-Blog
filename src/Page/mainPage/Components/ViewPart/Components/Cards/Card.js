import React from 'react'
import './Card.css'
import like from '../../../../../../Assets/Icons/like.png'
export const Card = (props) => {
    return (
        <div>
            <div className="row">
                <div className="card1">
                    <div className="col-md-4">
                        <img src={props.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 about">
                        <div className='data'>
                            <h4>{props.title}</h4>
                            <p>{props.desc}</p>
                        </div>
                        <div className="options">
                            <ul>
                                <li>Posted by : {props.author}</li>
                                <li>Date : {props.date}</li>  
                            </ul>
                            <div className="likes d-flex">
                                <p>Like</p>
                               <img src={like}  />
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
