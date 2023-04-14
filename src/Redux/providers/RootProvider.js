//Redux
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import rootReducer from "../reducers/combinedReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

const RootProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default RootProvider;
