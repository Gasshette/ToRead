import fetch from 'isomorphic-fetch';

const BASE_PATH = "http://localhost:8080/api";

const err = error => console.log('An error occured : ', error);

export const getAll = () => fetch(`${BASE_PATH}/items`)
  .then(
    response => response.json(),
    error => err(error),
  );

export const addOne = (item) => {
  const init = {
    method: "POST",
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  };

  console.log('item = ', item);

  return fetch(`${BASE_PATH}/items`, init)
  .then(
    response => response.json(),
    error => err(error),
  );
};

export const deleteOne = id => fetch(`${BASE_PATH}/items/${id}`)
  .then(
    response => response.json(),
    error => err(error),
  );
