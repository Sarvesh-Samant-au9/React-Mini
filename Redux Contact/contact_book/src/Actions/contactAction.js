import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
} from "../Type/actionType";

export const addContact = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};

export const getContact = (id) => {
  console.log(id);
  return {
    type: GET_CONTACT,
    payload: id,
  };
};

export const updatedContact = (obj) => {
  return {
    type: UPDATE_CONTACT,
    payload: obj,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};
