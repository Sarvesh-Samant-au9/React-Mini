import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addContact } from "../../store";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { addContact } from "../../Actions/contactAction";

const AddContact = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const createContact = (e) => {
    e.preventDefault();
    const newContact = {
      id: shortid.generate(),
      name: name,
      email: email,
      phone: telephone,
    };
    dispatch(addContact(newContact));
    history.push("/");
    setTelephone("");
    setName("");
    setEmail("");
  };

  return (
    <div className="container-fluid">
      <form onSubmit={(e) => createContact(e)}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">UserName</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Contact Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            className="form-control"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
