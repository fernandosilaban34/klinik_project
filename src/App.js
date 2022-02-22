import React from "react";
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './Store/index';
import routes from "./routes";
const store = configureStore();



export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <div>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={(props => {
                  return (
                    <route.layout {...props} >
                      <route.component {...props} />
                    </route.layout>
                  );
                })}
              />
            );
          })}
        </div>
      </Switch>
    </Router>
  </Provider>
);

const styles = {
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    padding: "1rem 2rem",
    height: "100vh",
  },
  root: {
    display: "grid",
    maxWidth: "100vw",
    gridTemplateColumns: "auto 1fr"
  },
  content: {
    padding: ".5rem",
    height: "100%",
    overflow: "auto",
    marginTop: "1rem",
  }
}
