// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {collection, getDocs, getFirestore, limit, orderBy, query} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBe3QwzFf2VLtIRuIHCrYAt_Apkf0KOMQ",
  authDomain: "nikestore-4168a.firebaseapp.com",
  projectId: "nikestore-4168a",
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





export default appFirestore;