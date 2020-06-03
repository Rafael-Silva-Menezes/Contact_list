import React, { useState, FormEvent } from "react";
import Contact from "../Models/contact";
import { v4 as uuidv4 } from 'uuid';



type Props = {
  onAddContact: (contact: Contact) => void;
};

const AddContactForm = ({ onAddContact }:Props) => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddContact({
      id: uuidv4(),
      name,
      email,
      phoneNumber,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input-name">Nome</label>
        <input
          id="input-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="input-email">Email</label>
        <input
          id="input-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="input-phoneNumber">Telefone</label>
        <input
          id="input-phoneNumber"
          type="number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        ></input>
      </div>
      <button type="submit">Criar Contato</button>
    </form>
  );
};

export default AddContactForm;
