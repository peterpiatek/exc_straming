import {combineReducers} from "redux";
import AuthReducer from "./authReducer";
import streamsReducer from "./streamsReducer";

export default combineReducers({
    auth: AuthReducer,
    streams: streamsReducer
})
