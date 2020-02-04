import { GET_PHOTO } from "../actions/Action_Unsplash";

export default function(state = null, action) {
  console.log(action.type)
  switch (action.type) {
    case GET_PHOTO:
      console.log(`ran reducer`, action.payload);
      return  action.payload
    default:
      return state;
  }
}
