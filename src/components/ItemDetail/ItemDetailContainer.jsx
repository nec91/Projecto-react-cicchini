import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


import { ItemDetail } from "./ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore"


export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { pid } = useParams()

  useEffect(() => {
  const dbFirestore = getFirestore()
  const queryDoc = doc(dbFirestore, 'products', pid)
  getDoc(queryDoc)
    .then(result => setProduct({ id: result.id, ...result.data() }))
    .catch(error => console.log(error))
}, [])

return (
  <div >
    <ItemDetail product={product} />
  </div>
)
}


