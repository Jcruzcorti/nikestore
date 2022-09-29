import React,{useState,useEffect} from 'react'
import './itemlistcontainer.css'
import { productsData } from '../../mock/ProductsData';
import ItemList from '../../components/itemList/ItemList';
import Logo from '../../components/logo/Logo';
import { useParams } from 'react-router-dom';
// import { useContext } from 'react';
// import { LogoContext } from '../../context/LogoContext';




function ItemListContainer(props) {

  const [welcome,setWelcome] =useState(true)
  const [products, setProducts] = useState([])

  const {categoryId}= useParams();



  useEffect(()=>{
  
    const getProducts = new Promise((res,rej)=>{
      
      setTimeout(()=>{ 
         if (categoryId === undefined) {
          setWelcome(false)
          res(productsData);
          rej("Error")     
        }
        else{
          setWelcome(false)
          const categoryFound = productsData.filter(cat=>{
            return cat.category === categoryId;
          })
          res(categoryFound);    
          rej("Error")     
        }
        
        
      },1500);

      

    });

    getProducts
    .then((res)=>{setProducts(res);})
    .catch((rej)=>{setProducts(rej);})

  },[categoryId]);

  

  const h1style = {
    color: props.color,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily
  } 

  return (
    <div> 
        <div>

          {
            welcome
            ?<>  
              <h1 style={h1style}  className="H1Welcome">{props.greeting}</h1>
                <Logo />
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