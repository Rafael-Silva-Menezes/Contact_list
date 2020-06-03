import React from "react";
import styled from "styled-components";

import Contact from "../Models/contact";

type Props = {
  contact: Contact;
  onRemoveContact: (id: string) => void;
};

const Card = styled.li`
  padding: 16px;
  border-radius: 20px;
  background-color: #776f82;
  text-align: center;

  & + & {
    margin-top: 16px;
  }
`;

const ContactItem = ({ contact, onRemoveContact }: Props) => (
  <Card>
    <p>Nome: {contact.name} </p>
    <p>Email: {contact.email}</p>
    <p>Telefone: {contact.phoneNumber}</p>

    <button onClick={() => onRemoveContact(contact.id)}>Excluir Contato</button>
  </Card>
);

export default ContactItem;
