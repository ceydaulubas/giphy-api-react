import React from   'react';
import './Gifs.css'

const Gif = ({gif, selectGifClick})=>{
    return (
      <img className="gif-img"
      src= {gif.images.downsized_medium.url} 
      alt="gifimage" 
      onClick= {() => selectGifClick(gif)}
       />
    )
    
};

export default Gif; 

