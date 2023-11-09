import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { mFetch } from "../../helpers/mFetch"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { cid } = useParams()

  useEffect(() => {
    if (cid) {
      mFetch()
        .then(result => setProducts(result.filter(product => product.category === cid)))
        .catch(error => console.log(error))
        .finally(() => console.log('finally'))
        console.log(cid)
    } else
      mFetch()
        .then(result => setProducts(result))
        .catch(error => console.log(error))
        .finally(() => console.log('finally'))
  }, [cid])
  console.log(cid)
  
  // console.log(products)
  return (
    <div>
      <ItemList products={products} />
    </div>
  )
}
