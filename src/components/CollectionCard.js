import React from 'react'
import weth from '../assets/weth.png'
import './CollectionCard.css'

const CollectionCard = ({id,name, traits, image}) => {
    console.log(traits)
  return (
    <div className='collectionCard'>
        <img src={image} alt=''/>
        <div className='card_details'>
        <div className='card_name'>
            {name}
            <div className='card_id'>#{id}</div>
        </div>
        <div className='priceContainer'>
            <img className='wethImage' src={weth}  alt=''/>
            <div className='card_price'>{traits[0]?.value}</div>
        </div>
        </div>
    </div>
  )
}

export default CollectionCard