export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const addpeople = (e) => {
  return {
    type: "ADD_PEOPLE",
    payload: e,
  };
};

export const deletepeople = (e) => {
  return {
    type: "DELETE_PEOPLE",
    payload: e,
  };
};

export const updatepeople = ({ idholder, edit }) => {
  return {
    type: "UPDATE_PEOPLE",
    payload: { idholder, edit },
  };
};
