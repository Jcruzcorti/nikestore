import React,{useState,useEffect} from 'react'
import './itemlistcontainer.css'
import { productsData } from '../../mock/ProductsData';
import ItemList from '../../components/itemList/ItemList';
import Logo from '../../components/logo/Logo';



function ItemListContainer(props) {

  const [welcome,setWelcome] =useState(true)
  const [products, setProducts] = useState([])
  
  function welcomeGreeting() {
    setWelcome(false)
  }

  useEffect(()=>{

    
    const getProducts = new Promise((res,rej)=>{
      setTimeout(()=>{
        res(productsData);
        rej("error");
      },2000);

    });

    getProducts
    .then((res)=>{setProducts(res);})
    .catch((rej)=>{setProducts(rej);})

  },[]);

  

  const h1style = {
    color: props.color,
    fontSize: props.fontSize
  } 

  return (
    <div> 
        <div>

          {
            welcome
            ? <>
                <h1 style={h1style}>{props.greeting}</h1>
                <button onClick={welcomeGreeting} className="WelcomeButton">Click here to start the Nike experience</button>
                <Logo/>
              </>    
            : <>
                <h1 style={h1style}>{props.greeting}</h1>
                <ItemList items={products}/>       
              </> 
             
          }
        </div>
      
    </div>
  )
}

export default ItemListContainer;