import { Component } from "react"
import { Layout } from "./Layout";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import initialContacts from "../initialContacts";


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if(savedContacts !== null) {
      this.setState({ contacts: savedContacts });
      return;
    }
    this.setState({ contacts: initialContacts });
  }  

  componentDidUpdate(_, prevState) {
    if(prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    };
  };

  addContact = newContact => {
    const normalizedName = newContact.name.toLocaleLowerCase();

    if(this.state.contacts.find(contact => contact.name.toLowerCase() === normalizedName)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  deleteContact = e => {
    const contactName = e.currentTarget.closest('li').firstChild.firstChild.firstChild.textContent;
  
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => !contact.name.includes(contactName))
    }));
  };

  render() {
    const { filter } = this.state;
    const addContact = this.addContact;
    const changeFilter = this.changeFilter;
    const visibleContacts = this.getVisibleContacts();
    const deleteContact = this.deleteContact;

    return (
      <Layout>  
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={addContact}/>

        <h2>Contacts</h2>
        <Filter inputValue={filter} onChange={changeFilter} />
        <ContactList contacts={visibleContacts} deleteContact={deleteContact} />    
      </Layout>
    );
  };
};
