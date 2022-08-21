import React from 'react'
import './Profile.css';

import profilePic from '../../../../../Assets/Icons/profile.png';
export const Profile = (props) => {
    return (
        <>
            <div className="box-model">
                <img src={profilePic} alt="" />
                <p>{props.name}</p>
                <div className='delete'>
                    <button className='btn btn-danger'>Log out</button>
                </div>
            </div>
        </>
    )
}
