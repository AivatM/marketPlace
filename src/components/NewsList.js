import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux"
import "../assets/styles/NewsList.scss"
import {loadNews} from "../redux/actions";
import Loader from "../layouts/Loader";


function NewsList(props) {
    let {newsData, getNews, loading} = props;
    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPostCount, setTotalPostCount] = useState(0);

    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

    useEffect(() => {
        getNews(currentPage, pageSize, setTotalPostCount);
    }, [currentPage]);
    useEffect(() => {
        let tempNumberOfPages = [...pages]
        if (currentPage >= 1 && currentPage <= 3) {
            tempNumberOfPages = [1, 2, 3, 4, "...", pages.length]
        } else if (currentPage === 4) {
            const sliced = pages.slice(0, 5);
            tempNumberOfPages = [...sliced, "...", pages.length]
        } else if (currentPage > 4 && currentPage < pages.length - 2) {
            const sliced1 = pages.slice(currentPage - 2, currentPage);
            const sliced2 = pages.slice(currentPage, currentPage + 1);
            tempNumberOfPages = ([1, "...", ...sliced1, ...sliced2, "...", pages.length]);
        } else if (currentPage > pages.length - 3) {
            const sliced = pages.slice(pages.length - 4);
            tempNumberOfPages = ([1, "...", ...sliced]);
        }
        setArrOfCurrButtons(tempNumberOfPages);
    }, [currentPage])

    if (!newsData) return <Loader/>
    //ПАГИНАЦИЯ
    const pagesCount = Math.ceil(totalPostCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div className="container">
            <div className="news">
                <h2 className="news__title">Новости</h2>
                {newsData.map(newsCard => (
                    <div key={newsCard.id} className="news__card news-card">
                        <div className="news-card__wrapper-img">
                            <NavLink to={"/news/" + newsCard.id}><img src={newsCard.imgURL} alt="img"
                                                                      className="news-card__img"/></NavLink>
                        </div>
                        <div className="news-card__text">
                            <div className="news-card__date-time">
                                <span className="news-card__date">{newsCard.date}</span>
                                <span className="news-card__time">{newsCard.time}</span>
                            </div>
                            <div className="news-card__header">
                                <NavLink to={"/news/" + newsCard.id}>{newsCard.title}</NavLink>
                            </div>
                            <div className="news-card__text-content">
                                {newsCard.content.split("").filter((_, index) => index < 138).join("") + "..."}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="news-pagination">
                <span onClick={() => setCurrentPage(prev => (prev === 1) ? prev : prev - 1)}>Предыдущая</span>

                {
                    arrOfCurrButtons.map(page => <span key={page}
                                                       className={`news-pagination__number${currentPage == page ? " news-pagination__active" : ""}`}
                                                       onClick={() => setCurrentPage(page)}>{page}</span>)
                }
                <span onClick={() => setCurrentPage(prev => (prev === pages.length) ? prev : prev + 1)}>Следующая</span>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        newsData: state.news.news,
        // loading: state.app.loading
    }
}
const mapDispatchToProps = (dispatch) => ({
    getNews: (currentPage, pageSize, setTotalPostCount) => dispatch(loadNews(currentPage, pageSize, setTotalPostCount)),
})
export default connect(mapStateToProps, mapDispatchToProps)(NewsList);