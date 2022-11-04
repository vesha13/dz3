import './App.css';
import Listing from './Listing';
import data from './etsy.json'

function App() {
  //const newdata = data.map(data.MainImage.map(MainImage => JSON.parse(MainImage)))

  return (
    <div>
     {data.map((item, id) => {
            return(<Listing
            key = {id}
            id= {item.listing_id}
            currency ={item.currency_code }
            quantity = {item.quantity}
            url  ={item.url}
            title  = {item.title}
            price ={item.price}
            color ={item.color}
            img = {item.MainImage}
            />)
          })}
    </div>
  )
  }
export default App;