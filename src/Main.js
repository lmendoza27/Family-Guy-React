import React from 'react'
import Chapters from './data/chapters.json';
import './App.css';
import {Link} from "react-router-dom";

export default function Main() {
  return (
    <div>


        {Chapters.map((cadena,index)=> {
            return <>       
            <Link className="linkChapter" to={"/chapter/"+(cadena.id-1)}>     
            <h1> {cadena.name} </h1>
            </Link>
            </>

        })}


    </div>
  )
}
