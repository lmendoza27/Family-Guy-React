import React, { useState, useEffect}from 'react'
import Chapters from './data/chapters.json';
import './App.css';
import {useParams} from "react-router-dom";

export default function Random() {

  let params = useParams();
  //console.warn(params.id);

    const [chapter,setChapter] = useState(0);
    //const keys = Object.keys(Chapters);
  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    //setChapter(Math.floor(Math.random() * keys.length));
    setChapter(params.random)
  });

  // https://dev.to/rajeshroyal/page-not-found-error-on-netlify-reactjs-react-router-solved-43oa

  return (
    <div> 
        {Chapters.map((cadena,index)=> {
            return <>
            
         <h1> {cadena.name} </h1>
         <h3> Temporada {cadena.season} capítulo {cadena.chapter}</h3>
         <iframe src={cadena.url} className="Movie" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
        
         </>
        })[chapter]}
       
</div>

  )
}
