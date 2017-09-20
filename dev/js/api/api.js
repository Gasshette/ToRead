import fetch from 'isomorphic-fetch';

// Here is the place where you call your API to get datas to send in the store
// Let's just increment our counter for the example

// Get all movies
export const getMovies = () => fetch('https://facebook.github.io/react-native/movies.json')
  .then(
    response => response.json(),
    error => console.log('An error occured : ', error),
  );


export default getMovies;
// export const increaseCounter = (number) => {
//   console.log('api Called, number increased.');
//   return number + 1;
// };

// export const decreaseCounter = (number) => {
//   console.log('api Called, number decreased.');
//   return number - 1;
// };
