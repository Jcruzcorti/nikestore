import React,{useState,useEffect} from 'react'
import './itemlistcontainer.css'
import { productsData } from '../../mock/ProductsData';
import ItemList from '../../components/itemList/ItemList';
import Logo from '../../components/logo/Logo';
import { useParams } from 'react-router-dom';



function ItemListContainer(props) {

  const [welcome,setWelcome] =useState(true) 
  const [products, setProducts] = useState([])

  const {categoryId}= useParams();
  


  // useEffect(()=>{
  //   console.log(welcome);
  // },[]);



  useEffect(()=>{

    
    const getProducts = new Promise((res,rej)=>{
      setTimeout(()=>{ 
         if (categoryId === undefined) {
          res(productsData);
          rej("Error")     
        }
        else{
          const categoryFound = productsData.filter(cat=>{
            return cat.category === categoryId;
          })
          res(categoryFound);    
          rej("Error")     
        }
        
      },2000);

    });

    getProducts
    .then((res)=>{setProducts(res);})
    .catch((rej)=>{setProducts(rej);})

  },[categoryId]);

  

  const h1style = {
    color: props.color,
    fontSize: props.fontSize
  } 

  return (
    <div> 
        <div>

          {
            welcome
            ? <div>
                <h1 style={h1style}>{props.greeting}</h1>
                <Logo/>
                <button onClick={()=> setWelcome(false)} className="WelcomeButton">CLICK HERE to start the Nike experience</button>
                
              </div>    
            : <div>
                <h1 style={h1style}>{props.greeting}</h1>
                <ItemList items={products}/>       
              </div> 
             
          }
        </div>
      
    </div>
  )
}

export default ItemListContainer;