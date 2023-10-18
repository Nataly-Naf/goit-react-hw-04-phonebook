import { List, ListItem, ListBtn } from './Contacts.styled';


export const ContactsList = ({ contacts, onDelete }) => {
  if (contacts.length !== 0) {
    console.log(contacts);
    return (
      <List>
        {contacts.map(contact => {
          return (
            <ListItem key={contact.id}>
              {' '}
              {contact.name}: {contact.number}{' '}
              <ListBtn
                onClick={() => {
                  onDelete(contact.id);
                }}
              >
                Delete
              </ListBtn>
            </ListItem>
          );
        })}
      </List>
    );
  }
};
