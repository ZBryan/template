import { combineReducers } from "redux";
import photo from "./unsplashReducer";

// import { connectRouter } from "connected-react-router";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    photo
  });

export default rootReducer;
