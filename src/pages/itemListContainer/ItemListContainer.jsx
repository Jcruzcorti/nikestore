import React,{useState,useEffect} from 'react'
import './itemlistcontainer.css'
import ItemCount from '../../components/itemCount/ItemCount';
import { productsData } from '../../mock/ProductsData';
import ItemList from '../../components/itemList/ItemList';


function ItemListContainer(props) {

  const [products, setProducts] = useState([])
  

  useEffect(()=>{

    const bringProducts = new Promise((res,rej)=>{
      setTimeout(()=>{
        res(productsData);
        rej("error");
      },2000);

    });

    bringProducts
    .then((res)=>{setProducts(res);})
    .catch((rej)=>{setProducts(rej);})

  },[]);

  

  const h1style = {
    color: props.color,
    fontSize: props.fontSize
  } 

  return (
    <div>
      <h1 style={h1style}>{props.greeting}</h1>
      <ItemList items={products}/>
      <ItemCount  stock={5} initial={1}/>
      {/* onAdd={handleOnAdd} */}
    </div>
  )
}

export default ItemListContainer;