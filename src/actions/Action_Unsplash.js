import Unsplash, { toJson } from "unsplash-js";
export const GET_PHOTO = "GET_PHOTO";
import fetch from "node-fetch";
global.fetch = fetch;
// import fetch from "cross-fetch";
//move to secret
const api = process.env.REACT_APP_UNSPLASH_API_KEY
const unsplash = new Unsplash({ accessKey: api });
export const getPhoto =  () =>  dispatch => {
  console.log("ran");
   unsplash.photos
    .getRandomPhoto({ username: "naoufal" })
    .then(toJson)
    .then(payload => {
      console.log(payload);
       dispatch({ type: GET_PHOTO, payload });
    })
    .catch(err => {
      console.log(err);
    });
};

