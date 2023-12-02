import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore'

import { ItemList } from "./ItemList"



export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { cid } = useParams()

  useEffect(() => {
    if (cid) {
      const dbFirestore = getFirestore()
      const queryCollection = collection(dbFirestore, 'products')
      const queryFilter = query(queryCollection, where('category', '==', cid))
      
      getDocs(queryFilter)
        .then(result => setProducts(result.docs.map(products => ({ id: products.id, ...products.data() }))))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))

    } else {
      const dbFirestore = getFirestore()
      const queryCollection = collection(dbFirestore, 'products')

      getDocs(queryCollection)
        .then(result => setProducts(result.docs.map(products => ({ id: products.id, ...products.data() }))))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    }
  }, [cid])
  return (
    <>
    {
      loading ? <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : 
    <div>
      <ItemList products={products} />
    </div>
    }
    </>
  )
}
