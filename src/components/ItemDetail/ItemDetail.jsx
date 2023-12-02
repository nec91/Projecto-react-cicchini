import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

import { ItemCount } from "../Count/ItemCount"


export const ItemDetail = ({name, img, price, stock, category,description }) => {
    const [isCount, setIsCount] = useState(true)
    const { addToCart } = useCartContext()

    const onAdd = (quantity) => {
        addToCart({ ...product, quantity })
        setIsCount(false)
    }

    return (
        <div>
            <article className="CardItemDetail">
                <img src={img} alt={name} className="ItemImg" />
                <div>
                    <h2 className="ItemHeader">
                        {name}
                    </h2>
                    <p className="Info">
                        Categoría: {category}
                    </p>
                    <p className="Info">
                        Descripción: {description}
                    </p>
                    <p className="Info">
                        Precio: ${price}
                    </p>
                    <p className="Info">
                        Stock: {stock}
                    </p>
                    {
                        isCount ?
                            <ItemCount className="Button" initial={1} stock={stock} onAdd={onAdd} />
                            :
                            <>
                                <Link className="btn btn-outline-dark " to='/cart'>Ir al cart</Link>
                                <Link className="btn btn-outline-dark " to='/'>Ir al Home</Link>
                            </>
                    }
                </div>
            </article>
        </div>
    )
}