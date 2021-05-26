import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MLayout from "./layouts/MLayout";
import { store } from "./redux/store";
import HomePageContainer from "./containers/HomePageContainer";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path="/" component={HomePageContainer} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
