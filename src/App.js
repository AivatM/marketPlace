import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MLayout from "./layouts/MLayout";
import {store} from "./redux/store";
import HomePageContainer from "./containers/HomePageContainer";
import NewsPageContainer from "./containers/NewsPageContainer";
import NewsItem from "./components/NewsItem";
import Loader from "./layouts/Loader";


function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Switch>
                    <Route path="/" exact component={HomePageContainer}/>
                    <NewsPageContainer/>
                </Switch>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
