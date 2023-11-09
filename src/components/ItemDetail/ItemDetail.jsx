import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({ product }) => {
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
                    <ItemCount className="Button" initial={1} stock={product.stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
                </div>
            </article>
        </div>
    )
}