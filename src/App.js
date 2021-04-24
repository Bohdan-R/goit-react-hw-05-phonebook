import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  /* componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  } */

  /* componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  } */

  /*  addContact = (name, number) => {
    const contactName = [];
    this.state.contacts.map(contact =>
      contactName.push(contact.name.toLowerCase()),
    );

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contactName.includes(name.toLowerCase())) {
      return alert(`${name} is alredy in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    }
  }; */

  render() {
    return (
      <>
        <div className="section">
          <h1>Phonebook</h1>
          <ContactForm /* onSubmit={this.addContact}  */ />

          <p>Contacts</p>

          <Filter /* value={filter} onChange={this.changeFilter} */ />

          <ContactList
          /* contacts={filteredContacts}
            deleteContact={this.deleteContact} */
          />
        </div>
      </>
    );
  }
}

export default App;
