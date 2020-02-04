import Unsplash, { toJson } from "unsplash-js";
export const GET_PHOTO = "GET_PHOTO";

const api = process.env.REACT_APP_UNSPLASH_API_KEY
const unsplash = new Unsplash({ accessKey: api });
export const getPhoto =  () =>  dispatch => {
  console.log("ran");
   unsplash.photos
    .getRandomPhoto({ username: "naoufal" })
    .then(toJson)
    .then(payload => {
      console.log(`payload`,payload);
       return dispatch({ type: GET_PHOTO, payload });
    })
    .catch(err => {
      console.log(err);
    });
};

