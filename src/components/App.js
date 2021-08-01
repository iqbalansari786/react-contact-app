import React, { useState, useEffect } from 'react'
import Header from './Header';
import { uuid } from 'uuidv4';
import AddContact from './AddContact'
import './App.css';
import ListContact from './ListContact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {

    setContacts([...contacts, {id:uuid(),...contact}])
  }
  const removeContactHandler=(id)=>{
  var  newContactList=contacts.filter((contact)=>{
    return contact.id !==id;
  });
  setContacts(newContactList);
  }
  useEffect(() => {
    var localStorageContactList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (localStorageContactList) {
      setContacts(localStorageContactList);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
    <Router>
      <Header />
      <Switch>
      <Route 
      path="/" exact
      component={()=>(
        <ListContact 
        contact={contacts}
        getContactid={removeContactHandler} />
  )}/> 
       {/* <Route 
      path="/addContact" exact
      component={()=>(
        <AddContact addContactHandler={addContactHandler} />
      )}/>  */}
      <Route 
      path="/addContact" exact
      render={(props)=>(
        <AddContact {...props} addContactHandler={addContactHandler} />
      )}/> 
     

   </Switch>
      </Router>
    </>
  );
}

export default App;


{/* <AddContact addContactHandler={addContactHandler} />
      <ListContact contact={contacts} getContactid={removeContactHandler} /> */}