// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, Timestamp, where} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBe3QwzFf2VLtIRuIHCrYAt_Apkf0KOMQ",
  authDomain: "nikestore-4168a.firebaseapp.com",
  projectId: process.env.REACT_APP_PROYECT_FB_ID,
  storageBucket: "nikestore-4168a.appspot.com",
  messagingSenderId: "553368638329",
  appId: "1:553368638329:web:ce05007124b6ca19c915a8"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase)



    export async function getItems() {
        
        const bootsCollection = collection(appFirestore,"boots")
        const qOrder = query(bootsCollection, orderBy("idorder"), limit(18))
        const bootsSnapshot = await getDocs(qOrder)
        
        let answer = bootsSnapshot.docs.map(doc=>{
            return {
                ...doc.data(),
                id:doc.id,
            }
        })

        return answer;
    }



    export async function getAnItem(itemId) {

        const bootsCollection = collection(appFirestore,"boots")
        const docref = doc(bootsCollection, itemId)
        const docSnapchot = await getDoc(docref)

        return {
            id:docSnapchot.id,
            ...docSnapchot.data()
        };

    }
    
    export async function getItemCategory(categoryId){
        
        const bootsCollection = collection(appFirestore, "boots")
        const qCategory = query(bootsCollection,where("category", '==', categoryId));
        const plantsCatSnapchot = await getDocs(qCategory)

            let answerCat = plantsCatSnapchot.docs.map(doc=>{
                return{
                    ...doc.data(),
                    id:doc.id 
                   
                }
            })
            return answerCat;
    }




    export async function buyOrder(dataOrden) {
        const orderCollection = collection(appFirestore,"orders");
        const dataTimeStamp = Timestamp.now();
    
        const orderWithDate ={
            buyer: dataOrden.buyer,
            items: dataOrden.items,
            total: dataOrden.total,
            date: dataTimeStamp
        }
    
        const orderCreated = await addDoc(orderCollection,orderWithDate);
    
        return orderCreated;
    }
    

export default appFirestore;