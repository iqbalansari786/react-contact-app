import React, { useState, useEffect } from 'react'
import Header from './Header';
import AddContact from './AddContact'
import ContactCard from './ContactCard'
import './App.css';
import ListContact from './ListContact';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {

    setContacts([...contacts, contact])
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
      <ListContact contact={contacts} />
    </>
  );
}

export default App;
