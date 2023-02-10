import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';


export function ContactList({ contacts, deleteContact }) {
  return (
    <>
      <div>
        {contacts.length > 0 &&
          contacts.map(contact => {
            return (
              <Contact
                key={contact.id}
                deleteContact={deleteContact}
                {...contact}
              />
            );
          })}
      </div>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
