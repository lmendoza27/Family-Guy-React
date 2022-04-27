import React from 'react'
// rfc
import Chapters from './data/chapters.json';
import {useParams} from "react-router-dom";

import {WhatsappShareButton, WhatsappIcon, FacebookShareButton, FacebookIcon,   TwitterShareButton, TwitterIcon } from "react-share";

export default function Chapter() {


    
let params = useParams();
console.warn(params.id);

const shareUrl = 'https://family-guy.netlify.app/chapter/'+params.id;

  return (
    <div>
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
        })[params.id]}
    </div>
  )
}
