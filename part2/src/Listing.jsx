import React from "react";
import "./main.css"

function Listing({ url, img, title, currency, price, quantity}) {
   
    const onSlice =(title) =>{
        if (title.length>50)
        return title.slice(0,50) + '...'
        else
        return title
    }

    const onCur =(currency) =>{
        if (currency=== 'USD')
        return "$"
        if (currency=== 'EUR')
        return "€"
        else
        return currency
    }
  
    return (
        <div class="item-list">
        <div class="item">
          <div class="item-image">
            <a href={url}>
              <img alt='' src={img.url_570xN}/>
            </a>
          </div>
          <div class="item-details">
            <p class="item-title">{onSlice(title)}</p>
            <p class="item-price">{price} {onCur(currency)}</p>
            <p class="item-quantity level-medium">{quantity}</p>
          </div>
        </div>
      </div>
    )
    }
  export default Listing;