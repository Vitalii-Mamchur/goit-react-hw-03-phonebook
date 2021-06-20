import React, { Component } from 'react';
import 'modern-normalize/modern-normalize.css';
import Section from './components/Section';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
// import { parse } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = props => {
    const contact = {
      id: props.id,
      name: props.name,
      number: props.number,
    };

    const searchSomeName = this.state.contacts
      .map(contact => contact.name)
      .includes(props.name);

    if (searchSomeName) {
      alert(`${props.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  visibleContact = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacsts = JSON.parse(contacts);

    if (parsedContacsts) {
      this.setState({ contacts: parsedContacsts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const visibleContact = this.visibleContact();

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter
            value={this.state.filter}
            onChangeFilter={this.changeFilter}
          />
          {visibleContact.length > 0 && (
            <Contacts
              contacts={visibleContact}
              onRemoveContact={this.removeContact}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
