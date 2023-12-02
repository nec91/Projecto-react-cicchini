
import { useNavigate } from "react-router-dom"
import { addDoc, collection, doc, getFirestore, serverTimestamp, updateDoc } from "firebase/firestore"
import { useFormik } from "formik"
import Swal from "sweetalert2"

import * as Yup from "yup"

import { CheckOut } from "./CheckOut"
import { useCartContext } from "../../context/CartContext"


export const ChekOutContainer = () => {
    const { cartList, getTotalPrice, emptyCart } = useCartContext()

    const total = getTotalPrice()

    const navigate = useNavigate()

    const newOrder = (data) => {
        const order = {
            buyer: data,
            items: cartList,
            total,
            date: serverTimestamp()
        }
        const dbFirestore = getFirestore()
        const odersCollection = collection(dbFirestore, "orders")

        Swal.fire({
            title: "¿Desea confirmar su compra?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar compra",
            confirmButtonText: "Si",
        }).then((result) => {
            if (result.isConfirmed) {
                addDoc(odersCollection, order).then((res) => {
                    Swal.fire({
                        title: "Gracias por su compra",
                        text: `Su número de orden es: ${res.id}`,
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Volver a la tienda",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // New stock
                            cartList.forEach((element) => {
                                updateDoc(doc(dbFirestore, "products", element.id), {
                                    stock: element.stock - element.quantity,
                                })
                            })
                            emptyCart()

                            navigate("/")
                        }
                    })
                })
            }
        })
    }
    const { handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            email: "",
            telefono: "",
        },

        onSubmit: (data) => {
            newOrder(data)
        },

        validateOnChange: false,

        validationSchema: Yup.object({
            nombre: Yup.string()
                .required("Campo obligatorio")
                .min(3, "Debe tener al menos 3 caracteres")
                .max(20, "Debe tener un máximo de 20 caracteres"),
            apellido: Yup.string().required("Campo obligatorio"),
            email: Yup.string()
                .required("Campo obligatorio")
                .email("Inválido"),
            emailRepeat: Yup.string()
                .required("Campo obligatorio")
                .oneOf([Yup.ref("email")], "Los valores introducidos no coinciden"),

        })
    })
    return (
        <CheckOut
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            cartList={cartList}
            total={total}
        />
    )
}



