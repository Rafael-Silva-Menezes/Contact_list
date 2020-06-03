import React, { useState } from "react";
import styled from "styled-components";
import ContactItem from "../components/ContactItem";
import ContactsUsers from "../contacts";
import AddContactForm from "../components/AddContactForm";
import Contact from "../Models/contact";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Card = styled.main`
  width: 768px;
  padding: 16px;
  background-color: #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  overflow: auto;
`;

const ContactList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Contacts = () => {
  const [isAddindContact, setIsAddindContact] = useState(false);
  const [contacts, setContacts] = useState(ContactsUsers);

  const handleRemoveContact = (removeContactId: string) => {
    setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== removeContactId)
    );
  };

  const handleAddContact = (contact: Contact) => {
    setContacts((contacts) => contacts.concat(contact));
    setIsAddindContact(false);
  };

  return (
    <Wrapper>
      <Card>
        <header>
          {isAddindContact && (
            <AddContactForm onAddContact={handleAddContact} />
          )}
          <button onClick={() => setIsAddindContact(true)}>
            Adicionar Contato
          </button>
        </header>
        <ContactList>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onRemoveContact={handleRemoveContact}
            />
          ))}
        </ContactList>
      </Card>
    </Wrapper>
  );
};

export default Contacts;
