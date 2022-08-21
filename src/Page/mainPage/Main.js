import React from 'react'
import { Header } from './Components/Header/Header';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { ViewPart } from './Components/ViewPart/ViewPart';
import './Main.css';
export const Main = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 sm-12 first">
            <Sidebar />
            </div>
            <div className="col-md-9 main">
                <Header />
                <ViewPart />
            </div>
        </div>
    </div>

    </>
  )
}
