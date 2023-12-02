import { Link } from "react-router-dom"

export const CartItem = ({ cartList, deleteProductById, total, cleanCartAlert, removeOneUnit }) => {

    return (
        <>
            {cartList.map((product) =>
                <div key={product.id}>
                    <img className='' src={product.img} />
                    <div>{product.name}</div>
                    <div>Precio: {product.price}</div>
                    <div>Cantidad Seleccionada  {product.quantity}</div>
                    <button className="btn btn-outline-dark botonItem" onClick={() => removeOneUnit(product.id)}>Eliminar unidad</button>
                    <button className="btn btn-outline-dark botonItem" onClick={() => deleteProductById(product.id)}>Eliminar total</button>
                </div>

            )}
            {cartList.length > 0 ? (
                <div>
                    <p>Finalizar compra</p>
                    <p>El total a abonar es: ${total}</p>
                    <Link to="/checkout">
                        <button>Finalizar compra</button>
                    </Link>
                    <button onClick={cleanCartAlert}>
                        Vaciar carrito
                    </button>
                </div>) : (
                <div>
                    <p>El carrito se encuentra vacío</p>
                    <Link to="/">
                        <button >Volver a la tienda</button>
                    </Link>
                </div>
            )}
        </>
    )
}
