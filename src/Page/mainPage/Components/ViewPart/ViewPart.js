import React from 'react'

import './ViewPart.css'
import { Outlet } from 'react-router-dom'
export const ViewPart = () => {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 viewPart">
                    <Outlet />
                    
                </div>
            </div>
        </div>
    </>
  )
}
