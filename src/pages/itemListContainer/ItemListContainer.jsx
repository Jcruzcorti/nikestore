import React,{useState,useEffect} from 'react'
import './itemlistcontainer.css'
// import { productsData } from '../../mock/ProductsData';
import ItemList from '../../components/itemList/ItemList';
import Logo from '../../components/logo/Logo';
import { useParams } from 'react-router-dom';
// import { useContext } from 'react';
// import { LogoContext } from '../../context/LogoContext';
import {getItems,getItemCategory} from '../../services/Firestore'




function ItemListContainer(props) {

  const [welcome,setWelcome] =useState(true)
  const [products, setProducts] = useState([])

  const {categoryId}= useParams();


  useEffect(()=>{

    if (categoryId) {
      getItemCategory(categoryId)
        .then((res)=>{
          return(
            setWelcome(false),
            setProducts(res)
            ) 
        })
        .catch((rej)=>{setProducts(rej);})
    }

    else {
      getItems()
        .then((res)=>{
          return(
            setWelcome(false),
            setProducts(res)      
          )     
        })
        .catch((rej)=>{setProducts(rej);})

    }
    
  },[categoryId]);

  

  const h1style = {
    color: props.color,
    fontFamily: props.fontFamily
  } 

  return (
    <div> 
        <div>

          {
            welcome
            ?<>  
              <h1 style={h1style}  className="H1Welcome">{props.greeting}</h1>
                <Logo/>
            </>
            :<>
              <h1 style={h1style}  className="H1Welcome">{props.greeting}</h1>
              <div className="DivItemListContainer">        
                <ItemList items={products}/>              
              </div> 
            </>
          }
  
          
        </div>
      
    </div>
  )
}

export default ItemListContainer;