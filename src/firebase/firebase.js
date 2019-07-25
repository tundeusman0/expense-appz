import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").once("value")
// .then(snapshot=>{
//     console.log(snapshot.val())
//     const expenses = []
//     snapshot.forEach(expense=>{
//         console.log(expense.key)
//         expenses.push({
//             id: expense.key,
//             ...expense.val()
//         })
//     })

//     console.log(expenses)
// })
// .catch((e)=>{

// })
// database.ref("expenses").push({
//     description: "to do",
//     note: "go for it",
//     amount: 300
// })
// database.ref("expenses").push({
//     description: "second note",
//     note: "second body",
//     amount: 6000
// })
// database.ref().set({
//     name: "tunde uthman",
//     age: 23,
//     location:{
//         state:"kwara state",
//         city: "ilorin"
//     }
// })
// database.ref("location").set({
//     state: "osun state",
//     city: "ife"
// }).then(()=>{
//     console.log("changed")
// }).catch((error)=>{
//     console.log("unable to connect", error)
// })

// database.ref().update({
//     job: "software developer",
//     "location/city": "ife"
// }).then(()=>{
//     console.log("update")
// }).catch(()=>{
//     console.log("unable to update")
// })

// database.ref().on("value",snapshot=>{
//     console.log(snapshot.val())
// })

// setTimeout(()=>{
//     database.ref().update({
//         age: 30
//     })
// },6000)