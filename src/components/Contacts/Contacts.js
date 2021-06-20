import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <div className={styles.contacts}>
      <ul>
        {contacts.map(contact => (
          <li className={styles.contacts_item} key={contact.id}>
            {contact.name + ' : ' + contact.number}
            {
              <div>
                <button
                  className={styles.contacts_button}
                  type="button"
                  name="delte"
                  onClick={() => {
                    onRemoveContact(contact.id);
                  }}
                >
                  delete
                </button>
              </div>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.prototype = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }),
  ),
};

export default Contacts;
