import React,{useEffect,useState} from 'react'
import './itemdetailcontainer.css'
// import {productsData} from '../../mock/ProductsData'
import ItemDetail from '../../components/itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {getAnItem} from '../../services/Firestore'

function ItemDetailContainer(props) {

  const [product,setProduct] = useState({})
  const {itemId} = useParams()


  useEffect(()=>{
    
    getAnItem(itemId)
    .then((res)=>{setProduct(res)})
    .catch((rej)=>{setProduct(rej)})

  },[itemId]);

  const h1style = {
    color: props.color,
    fontSize: props.fontSize
  } 

  return (
    <div>
      <h1 style={h1style} className="H1Welcome">{props.greeting}</h1>
      <ItemDetail item={product}/>

    </div>
  )
}

export default ItemDetailContainer;