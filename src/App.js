import React from "react";
import  firestore  from "./database/firebase";

function App() {
  const studentRef = firestore.collection("students");
  studentRef.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      if (doc.data()) {
        console.log(doc.id);
        console.log(doc.data().name);
        console.log(doc.data().age)
      }
      
    });
  });
  return <div className="App"></div>;
}

export default App;
