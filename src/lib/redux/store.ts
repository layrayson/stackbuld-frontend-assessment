import { createStore, applyMiddleware } from "redux";
import rootReducer from "@/lib/redux/reducers/index.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

const store = createStore(rootReducer, composeWithDevTools());
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(() => store);
