import React from 'react'
import { Link } from 'react-router-dom';
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
                    <li><Link to="/">Home</Link></li>
                    <hr />
                    <li><Link to="/post">Post Blogs</Link></li>
                    <hr />
                    <li><Link to="/myblogs">My Blogs</Link></li>
                    <hr />
                </ul>
            </div>
        </div>
       </div>
    </>
  )
}
