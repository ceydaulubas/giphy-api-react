import React from   'react';

const Gif = ({gif})=>{
    return (
      <img src= {gif.images.downsized_medium.url} alt="gifimage" />
    )
    
};

export default Gif; 

