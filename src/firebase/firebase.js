import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/database";
import expenses from "../tests/fixtures/expenses";



const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  }
  firebase.initializeApp(firebaseConfig)

  const database= firebase.database()
  const googleProvider = new firebase.auth.GoogleAuthProvider()

  
  export {firebase,googleProvider, database as default }

/* database.ref('notes').on('value',(snapshot)=>{
  const exps=[];
  snapshot.forEach((child)=>{
    exps.push({
      id:child.key,
      ...child.val()
    })

  })

  console.log(exps);
}) */

/* database.ref('notes').on('child_changed',(snapshot)=>{
  console.log(snapshot.key);
}) */



 
   /* database.ref().set({
      name:'Edson Matsimbe',
      age:31,
      isSingle:false,
      stressLevel:6,
      job:{
        title:'software Dev',
        company:'Google'
      },
      location:{
          city:'Budapest',
          country:'Hungary'
      }
  }).then(()=>{
    console.log('data is saved');
  }).catch((e)=>{
    console.log('this failed', e);
  }) 
  
database.ref().update({
  stressLevel:9,
  'job/company':'Amazon',
  'location/city':'Seattle'
  
})  */

/* database.ref('location')
  .once('value')
  .then((snapshot)=>{
    const val = snapshot.val()
    console.log(val);
  })
  .catch((e)=>{
    console.log('error fetching data',e);
  }) */

  

 /* const onValueChange= database.ref().on('value',(snapshot)=>{
    const data=snapshot.val()
    
    console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
  },(e)=>{
    console.log(error,e);
  })

  setTimeout(()=>{
  database.ref('job/company').set('Google')
  },3500)
 */