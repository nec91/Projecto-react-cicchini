import { useState } from "react"

export const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

  return (
    <div className="Counter">
        <div className="Controls">
            <p className="Number">{quantity}</p>
            <button className="Button" onClick={decrement}>-</button>
            <button className="Button" onClick={increment}>+</button>
        </div>
        <div className="Controls">
            <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
        </div>
    </div>
  )
}
