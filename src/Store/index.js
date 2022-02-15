import { createStore, applyMiddleware } from "redux";
import reducers from "../Reducers/index";
import reduxthunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxthunk, promiseMiddleware)
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require("../Reducers/index").default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}