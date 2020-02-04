import Unsplash, { toJson } from "unsplash-js";
export const GET_PHOTO = "GET_PHOTO";
//move to secret
const unsplash = new Unsplash({ accessKey: api });
export const getPhoto = () => async dispatch => {
  console.log("ran");
   unsplash.photos
    .getRandomPhoto({ username: "naoufal" })
    .then(toJson)
    .then(json => {
      console.log(json);
      return dispatch({ type: GET_PHOTO, payload: json });
    })
    .catch(err => {
      console.log(err);
    });
};

