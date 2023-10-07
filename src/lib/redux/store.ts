import { createStore, applyMiddleware } from "redux";
import rootReducer from "@/lib/redux/reducers/index.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
// export const wrapper = createWrapper(() => store);
