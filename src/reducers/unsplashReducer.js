import { GET_PHOTO } from "../actions/Action_Unsplash";

export default function(state = null, action) {
  switch (action.type) {
    case GET_PHOTO:
      console.log(`ran reducer`, action.payload);
      return {
        ...state,
        ...{ photo: action.payload, loading: action.loading }
      };

    default:
      return state;
  }
}
