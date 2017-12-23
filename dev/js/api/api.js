import fetch from 'isomorphic-fetch';

const BASE_PATH = "http://localhost:8080/api";

const err = error => console.log('An error occured : ', error);

export const getAll = () => fetch(`${BASE_PATH}/items`)
  .then(
    (response) => {
      if (!response.ok) {
        Promise.reject(response);
      }
      return response.json();
    },
    error => err(error),
  );

  // add one or more, doesn't matter since api is getting our request body as a List<Item>
export const addOne = item => fetch(`${BASE_PATH}/items`, {
  method: "POST",
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
  body: JSON.stringify(item),
})
.then(
  response => response.json(),
  error => err(error),
);

export const deleteOne = item => fetch(`${JSON.parse(item)._links.item.href}`, { method: "DELETE" })
  .then(
    () => item,
    error => err(error),
  );
