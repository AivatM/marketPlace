import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {loadNewsItem} from "../redux/actions";
import "../assets/styles/NewsList.scss"
import viewIcon from "../assets/images/news/view.svg"
import {withRouter} from "react-router-dom";
import Loader from "../layouts/Loader";

function NewsItem(props) {
    const {getNewsItem, newsItem, loading} = props;
    const postId = props.match.params.userId;
    useEffect(() => {
        getNewsItem(postId);
    }, [])

    if (!newsItem) return <Loader/>
    // const newsData = [
    //     {
    //         id: 1,
    //         imgURL: "https://www.iphones.ru/wp-content/uploads/2020/09/5E6BAFC8-85C1-4F85-8481-6DFD79266508.jpeg",
    //         date: "20/12/20",
    //         time: "14:20",
    //         title: "Название статьи на одну строку 1",
    //         content: "Великий шелковый путь - грандиозный торговый маршрут, соединивший в древности Восток и Запад.  Это не просто караванные пути, это трансфер...",
    //         contentViews: 20
    //     }]
    return (
        <div className="container">
            <div className="news-item">
                <div className="news-item__wrapper-img">
                    <img className="news-item__img" src={newsItem.imgURL} alt="bg"/>
                </div>
                <div className="news-item__text-content">
                    <div className="news-item__container">
                        <h2 className="news-item__title"> {newsItem.title}</h2>
                        {newsItem.content}
                    </div>
                </div>
                <div className="news-item__footer">
                    <div className="news-item__container">
                        <div className="news-item__footer-wrapper">
                            <div className="news-item__date-time news-item__date-time--order">
                                <span className="news-item__date">
                                    {newsItem.date}
                                </span>
                                <span className="news-item__time">
                                    {newsItem.time}
                                </span>
                            </div>
                            <div className="news-item__views">
                                <img src="" alt=""/>
                                <img src={viewIcon} className="news-item__views-icon" alt="viewIcon"></img> {newsItem.contentViews}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    newsItem: state.news.newsItem,
    loading: state.app.loading
})

const mapDispatchToProps = (dispatch) => ({
    getNewsItem: (postId) => dispatch(loadNewsItem(postId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewsItem));