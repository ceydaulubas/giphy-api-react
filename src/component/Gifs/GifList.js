import React from 'react'


import Gif from './Gif'

//(props)=({gifResult})

const GifList = ({gifResults, selectGifClick}) => {
    return (
        <div className="gif-list">
            {gifResults.map((gifItem)=>(
                <Gif key ={gifItem.id} gif={gifItem} selectGifClick={selectGifClick} />
            ))}
        </div>
    )
}


export default GifList;
