import { postReducer } from "./../post/post.reducer";
import { userReducer } from "./../user/user.reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({ userReducer, postReducer });
export default reducers;
export type RootState = ReturnType<typeof reducers>;
