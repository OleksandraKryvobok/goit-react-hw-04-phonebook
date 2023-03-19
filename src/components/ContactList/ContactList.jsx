import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { List, Item, Container } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <List>
            {contacts.map(contact => {
                return (
                    <Item key={nanoid()}>
                        <Container>
                            <div>
                                <span>{contact.name}</span>
                                : {contact.number}
                            </div>
                            
                            <button type='button' onClick={deleteContact}>Delete</button>
                        </Container>
                    </Item>
                )
            })}
        </List>
    );
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            number: PropTypes.string
        })
    ).isRequired,
    deleteContact: PropTypes.func.isRequired
}