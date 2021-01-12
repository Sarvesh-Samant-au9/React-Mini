import React, { useEffect } from "react";
import Avatar from "react-avatar";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact, selectAllContact } from "../Actions/contactAction";

const Contact = ({ selectAll }) => {
  // console.log(selectAll);
  const contactInfo = useSelector((state) => state.contacts.contacts);
  // console.log(contactInfo);
  const dispatch = useDispatch();
  // const selectDispatch = useDispatch();
  // useEffect(() => {
    // if (selectAll) {
      // // selectDispatch(selectAllContact(contactInfo.map((c) => c.id)));
    // }
  // }, [s]);
  return (
    <>
      {contactInfo.map(function (eachContact, index) {
        // <td>Action</td>
        // console.log(eachContact);
        return (
          <tr key={eachContact.id}>
            <td>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  checked={selectAll}
                  className="custom-control-input"
                />
                <label className="custom-control-label"></label>
              </div>
            </td>
            <td>
              <Avatar
                name={eachContact.name}
                size="40"
                round={true}
                className="mr-2"
              />
              {eachContact.name}
            </td>
            <td>{eachContact.phone}</td>
            <td>{eachContact.email}</td>
            <td className="action">
              <Link to={`/editContact/${eachContact.id}`}>
                <span className="material-icons">edit</span>
              </Link>
              <>
                <span
                  onClick={() => dispatch(deleteContact(eachContact.id))}
                  className="material-icons"
                >
                  remove_circle
                </span>
              </>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Contact;
