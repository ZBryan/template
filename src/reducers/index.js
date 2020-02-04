import { combineReducers } from "redux";
import photo from "./unsplashReducer";


const rootReducer =
  combineReducers({
    photo
  });

export default rootReducer;
