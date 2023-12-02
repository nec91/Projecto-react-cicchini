import { Link } from "react-router-dom"

export const Item = ({ id, name, img, price, stock }) => {
    return (
        <div>
            <article className="CardItem">
                    <h2 className="ItemHeader">
                        {name}
                    </h2>
                    <img src={img} alt={name} className="ItemImg" />
                    <p className="Info">
                        Precio: ${price}
                    </p>
                    <p className="Info">
                        Stock: {stock}
                    </p>
                    <Link to={`/detail/${id}`}>
                        <button className="Button">Detalle</button>
                    </Link>
            </article>
        </div>
    )
}
