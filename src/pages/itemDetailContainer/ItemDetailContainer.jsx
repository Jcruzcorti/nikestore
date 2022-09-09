import React,{useEffect,useState} from 'react'
import './itemdetailcontainer.css'
import {productsData} from '../../mock/ProductsData'
import ItemDetail from '../../components/itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer(props) {

  const [product,setProduct] = useState({})
  const {itemId} = useParams()


  useEffect(()=>{
    
    const getProduct = new Promise ((res,rej)=>{
      setTimeout(() => {
        const itemFound = productsData.find((boots)=>{
            return (boots.id === parseInt(itemId) )
        })
        res(itemFound);
        rej("Error");
      }, 2000);
    });

    getProduct
    .then((res)=>{setProduct(res)})
    .catch((rej)=>{setProduct(rej)})

  },[itemId]);

  const h1style = {
    color: props.color,
    fontSize: props.fontSize
  } 

  return (
    <div>
      <h1 style={h1style}>{props.greeting}</h1>
      <ItemDetail item={product}/>

    </div>
  )
}

export default ItemDetailContainer;