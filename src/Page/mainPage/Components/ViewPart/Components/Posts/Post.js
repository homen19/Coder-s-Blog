import React from 'react'
// import postImg1 from '../../../../../../Assets/Images/js.png'
// import postImg2 from '../../../../../../Assets/Images/mg.png'

import { Card } from '../Cards/Card';
export const Post = () => {
    const data = [
        {
            id : 1,
            title : 'JavaScript',
            img : 'Images/js.png',
            author : 'Homen nath',
            date : '21th august 2022',
            desc : 'Variables defined with let and const are hoisted to the top of the block, but not initialized. Meaning The block of code is aware of the variable, but it cannot be used until it has been declared. Using a let variable before it is declared will result in a ReferenceError. The variable is in a "temporal dead zone" from the start of the block until it is declared'
        },
        {
            id : 2,
            title :'Mongo db',
            img : 'Images/mg.png',
            author : 'Full stacker',
            date : '21th august 2022',
            desc : 'Mongo DB can be defined as a document-oriented database system that uses the concept of NoSQL. It also provides high availability, high performance, along with automatic scaling. This open-source product was developed by the company - 10gen in October 2007, and the company also maintains it. MongoDB exists under the General Public License (GPL) as a free database'
        },
        {
            id : 3,
            title :'Express Js',
            img : 'Images/ej.svg',
            author : 'Homen Nath',
            date : '22th august 2022',
            desc : 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.'
        }
    ]
    return (
        <>
            <div className="container">
                <h2 className='text-center my-2'> Blogs</h2>
                {data.map((d)=>(
                    <Card title={d.title} img={d.img} desc={d.desc} author={d.author} date = {d.date} key={d.id}/>
                ))}
                
                
                
                
                
            </div>

        </>
    )
}
