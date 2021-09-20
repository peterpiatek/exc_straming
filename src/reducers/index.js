import {combineReducers} from "redux";
import AuthReducer from "./authReducer";
import {reducer as formReducer} from "redux-form";
import streamsReducer from "./streamsReducer";

export default combineReducers({
    auth: AuthReducer,
    form: formReducer,
    streams: streamsReducer
})
