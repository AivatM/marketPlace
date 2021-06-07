import React from "react";
import MLayout from "../layouts/MLayout";
import NewsList from "../components/NewsList";
import {Route} from "react-router-dom";
import NewsItem from "../components/NewsItem";


function NewsPageContainer() {
    return (
        <MLayout>
            <Route path="/news" exact component={ NewsList} />
            <Route path="/news/:userId"  component={NewsItem}/>
        </MLayout>
    );
}

export default NewsPageContainer;
