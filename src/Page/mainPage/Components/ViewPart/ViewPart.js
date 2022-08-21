import React from 'react'
import { Post } from './Components/Posts/Post'
import './ViewPart.css'
export const ViewPart = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 viewPart">
                    <Post />
                </div>
            </div>
        </div>
    </>
  )
}
