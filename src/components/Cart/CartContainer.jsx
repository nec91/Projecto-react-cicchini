
import { useCartContext } from "../../context/CartContext"
import Swal from "sweetalert2"

import { CartItem } from "./CartItem"



export const CartContainer = () => {
  const { cartList, emptyCart, getTotalPrice, deleteProductById, removeOneUnit } = useCartContext()

  let total = getTotalPrice()

  const cleanCartAlert = () => {
    Swal.fire({
      title: "Seguro quieres vaciar el carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, vaciar",
    }).then((result) => {
      if (result.isConfirmed) {
        emptyCart();
        Swal.fire("Carrito vaciado", "", "success");
      }
    });
  };



  return (
    <CartItem
      cartList={cartList}
      cleanCartAlert={cleanCartAlert}
      deleteProductById={deleteProductById}
      removeOneUnit={removeOneUnit}
      total={total}




    />
  )
}
