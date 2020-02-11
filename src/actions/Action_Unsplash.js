import Unsplash, { toJson } from "unsplash-js";
export const GET_PHOTO = "GET_PHOTO";

const api = process.env.REACT_APP_UNSPLASH_API_KEY;
const unsplash = new Unsplash({ accessKey: api });
export const getPhoto = () => dispatch => {
  unsplash.photos
    .getRandomPhoto({ count: 6, orientation: "portrait" })
    .then(toJson)
    .then(payload => {
      return dispatch({ type: GET_PHOTO, payload });
    })
    .catch(err => {
      console.log(err);
    });
};
