import React from 'react'

import Gif from './Gif'

//(props)=({gifResult})

const GifList = ({gifResults}) => {
    return (
        <div>
            {gifResults.map((gifItem)=>(
                <Gif key ={gifItem.id} gif={gifItem} />
            ))}
        </div>
    )
}


export default GifList;
