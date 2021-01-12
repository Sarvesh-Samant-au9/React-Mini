import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

const Contacts = () => {
  const contactSolution = useSelector((state) => state.contacts);
  console.log(contactSolution);
  return (
    <div className="container">
      <table className="table">
        <thead className="bg-danger text-white">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Mail-Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Contact />
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
