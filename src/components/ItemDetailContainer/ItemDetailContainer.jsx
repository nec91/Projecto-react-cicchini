import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { mFetch } from "../../helpers/mFetch"
import { ItemDetail } from "../ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { pid } = useParams()

  useEffect(() => {
    mFetch(pid)      
        .then(result => setProduct(result))
        .catch(error => console.log(error))
    }, [])

  return (
    <div >
      <ItemDetail product={product} />
    </div>
  )
}


