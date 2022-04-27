import React, { useState, useEffect}from 'react'
import Chapters from './data/chapters.json';
import './App.css';
import {useParams} from "react-router-dom";

// LLegué a comprenderlo mejor aquí https://github.com/nygardk/react-share/blob/master/demo/Demo.tsx
import {WhatsappShareButton, WhatsappIcon, FacebookShareButton, FacebookIcon,   TwitterShareButton, TwitterIcon } from "react-share";

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
  const shareUrl = 'https://family-guy.netlify.app/random/'+params.random;
  //const title = 'Padre de Familia';

  return (
    <div> 
<>

        {Chapters.map((cadena,index)=> {
            return <>
            <br></br>
<WhatsappShareButton
            url={shareUrl}
            title={(cadena.name)+" - Family Guy"}
            separator=": "
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={50} round />
          </WhatsappShareButton>

          <FacebookShareButton
            url={shareUrl}
            quote={(cadena.name)+" - Family Guy"}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={50} round />
          </FacebookShareButton>

          <TwitterShareButton
            url={shareUrl}
            title={(cadena.name)+" - Family Guy"}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={50} round />
          </TwitterShareButton>

         <h1> {cadena.name} </h1>
         <h3> Temporada {cadena.season} capítulo {cadena.chapter}</h3>
         <iframe src={cadena.url} className="Movie" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
        
         </>
        })[chapter]}
       </>
</div>

  )
}
