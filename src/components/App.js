import React, { useState, useEffect } from 'react'
import Header from './Header';
import { uuid } from 'uuidv4';
import AddContact from './AddContact'
import './App.css';
import ListContact from './ListContact';

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
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ListContact contact={contacts} getContactid={removeContactHandler} />
    </>
  );
}

export default App;
