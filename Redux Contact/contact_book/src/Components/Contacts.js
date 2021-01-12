import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAllContact,
  removeAllContact,
  selectAllContact,
} from "../Actions/contactAction";
import Contact from "./Contact";

const Contacts = () => {
  const dipatch = useDispatch();
  const [select, setSelect] = useState(false);
  const contactSolution = useSelector((state) => state.contacts);
  console.log(contactSolution);
  // console.log(select);
  const selectedContactLength = useSelector(
    (state) => state.contacts.selectedContacts
  );
  console.log(selectedContactLength);
  useEffect(() => {
    if (select) {
      dipatch(selectAllContact(contactSolution.contacts.map((c) => c.id)));
    } else {
      dipatch(removeAllContact());
    }
  }, [select]);
  return (
    <div className="container">
      {selectedContactLength.length > 0 ? (
        <button
          className="btn btn-danger"
          onClick={() => dipatch(deleteAllContact())}
        >
          Delete All
        </button>
      ) : null}
      <table className="table">
        <thead className="bg-danger text-white">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  id="selectCheckbox"
                  className="custom-control-input"
                  onClick={() =>
                    select === true ? setSelect(false) : setSelect(true)
                  }
                />
                <label
                  htmlFor="selectCheckbox"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Mail-Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Contact selectAll={select} />
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
