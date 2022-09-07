import React,{useEffect,useState} from 'react'
import './itemdetailcontainer.css'
import {productsData} from '../../mock/ProductsData'
import ItemDetail from '../../components/itemDetail/ItemDetail';

function ItemDetailContainer(props) {

  const [product,setProduct] = useState({})

  useEffect(()=>{
    
    const getProduct = new Promise ((res,rej)=>{
      setTimeout(() => {
        res(productsData[0]);
        rej("Erros");
      }, 2000);
    });

    getProduct
    .then((res)=>{setProduct(res)})
    .catch((rej)=>{setProduct(rej)})

  },[]);

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