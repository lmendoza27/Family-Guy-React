import React from 'react'
// rfc
import Chapters from './data/chapters.json';
import {useParams} from "react-router-dom";



export default function Chapter() {


    
let params = useParams();
console.warn(params.id);


  return (
    <div>
                {Chapters.map((cadena,index)=> {
            return <>
            
         <h1> {cadena.name} </h1>
         <h3> Temporada {cadena.season} capítulo {cadena.chapter}</h3>
         <iframe src={cadena.url} className="Movie" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
        
         </>
        })[params.id]}
    </div>
  )
}
