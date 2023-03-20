import { useState, useEffect } from "react";
import { Layout } from "./Layout";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import initialContacts from "../initialContacts";

function getContacts() {
  const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  if(savedContacts !== null) {
    return savedContacts;
  };
  return initialContacts;
};

export const App = () => {
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const normalizedName = newContact.name.toLocaleLowerCase();

    if(contacts.find(contact => contact.name.toLowerCase() === normalizedName)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevState => [...contacts, newContact]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const deleteContact = e => {
    const contactName = e.currentTarget.closest('li').firstChild.firstChild.firstChild.textContent;
  
    setContacts(prevState => prevState.contacts.filter(contact => !contact.name.includes(contactName)));
  };

  return (
    <Layout>  
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={addContact}/>

      <h2>Contacts</h2>
      <Filter inputValue={filter} onChange={changeFilter} />
      <ContactList contacts={getVisibleContacts()} deleteContact={deleteContact} />    
    </Layout>
  );
};
