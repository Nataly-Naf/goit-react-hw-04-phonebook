import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { NameForm } from './NameForm/NameForm';
import { Component } from 'react';
import { FilterForm } from './FilterForm/FilterForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = newFilter => {
    this.setState({ filter: newFilter });
  };

  addName = contact => {
    const isInContacts = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      return alert(`${contact.name} is already in contacts`);
    }
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.concat({
          name: contact.name,
          id: nanoid(),
          number: contact.number,
        }),
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };
  render() {
    const visibleNames = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
    return (
      <div>
        <NameForm onSubmit={this.addName} />
        <FilterForm
          filter={this.state.filter}
          onChangeFilter={this.changeFilter}
        />
        <ContactsList contacts={visibleNames} onDelete={this.deleteContact} />
      </div>
    );
  }
}
