import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { useHistory, useParams } from "react-router-dom";
import { getContact, updatedContact } from "../../Actions/contactAction";
const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  const contactId = useSelector((state) => state.contacts.contactId);
  // console.log(contactId);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  useEffect(() => {
    if (contactId !== null) {
      setEmail(contactId.email);
      setName(contactId.name);
      setTelephone(contactId.phone);
    }
    dispatch(getContact(id));
  }, [contactId]);
  const onSubmit = (e) => {
    e.preventDefault();
    const updateChanges = Object.assign(contactId, {
      name: name,
      email: email,
      phone: telephone,
    });
    dispatch(updatedContact(updateChanges));
    history.push("/");
  };
  return (
    <div className="container-fluid">
      <form onSubmit={(e) => onSubmit(e)}>
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

        <button type="submit" className="btn btn-success">
          Edit Contact
        </button>
      </form>
    </div>
  );
};

export default EditContact;
