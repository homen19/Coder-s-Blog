import React from 'react'
import './Sidebar.css';
export const Sidebar = () => {
  return (
    <>
       <div className="row">
        <div className="col-md-12 sideBody">
            <div className="brandName">
                <h1>Coders's Blog</h1>
                <p>Regular updates blogs and amazing pictures</p>
            </div>
            <div className="controller">
                <ul>
                    <li><a href="#">Home</a></li>
                    <hr />
                    <li><a href="#">Post Blogs</a></li>
                    <hr />
                    <li><a href="#">Your Blogs</a></li>
                    <hr />
                </ul>
            </div>
        </div>
       </div>
    </>
  )
}
