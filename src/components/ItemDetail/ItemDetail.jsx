import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

import { ItemCount } from "../Count/ItemCount"


export const ItemDetail = ({ product }) => {
    const [isCount, setIsCount] = useState(true)
    const { addToCart } = useCartContext()

    const onAdd = (quantity) => {
        addToCart({ ...product, quantity })
        setIsCount(false)
    }
    console.log(ItemDetail)
    console.log(product.img)
    return (
        <div>
            <article className="CardItemDetail">
                <img src={product.img} alt={product.name} className="ItemImg" />
                <div>
                    <h2 className="ItemHeader">
                        {product.name}
                    </h2>
                    <p className="Info">
                        Categoría: {product.category}
                    </p>
                    <p className="Info">
                        Descripción: {product.description}
                    </p>
                    <p className="Info">
                        Precio: ${product.price}
                    </p>
                    <p className="Info">
                        Stock: {product.stock}
                    </p>
                    {
                        isCount ?
                            <ItemCount className="Button" initial={1} stock={product.stock} onAdd={onAdd} />
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