import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/styles/HomeSlider.scss";

function HomeSlider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const sliderArr = [
    {
      id: 1,
      url:
        "https://www.iphones.ru/wp-content/uploads/2020/09/5E6BAFC8-85C1-4F85-8481-6DFD79266508.jpeg",
      name: "Заголовок 1",
      subname: "Подзаголовок 1",
    },
    {
      id: 2,
      url:
        "https://www.iphones.ru/wp-content/uploads/2020/09/5E6BAFC8-85C1-4F85-8481-6DFD79266508.jpeg",
      name: "Заголовок 2",
      subname: "Подзаголовок 2",
    },
    {
      id: 3,
      url:
        "https://www.iphones.ru/wp-content/uploads/2020/09/5E6BAFC8-85C1-4F85-8481-6DFD79266508.jpeg",
      name: "Заголовок 3",
      subname: "Подзаголовок 3",
    },
    {
      id: 4,
      url:
        "https://www.iphones.ru/wp-content/uploads/2020/09/5E6BAFC8-85C1-4F85-8481-6DFD79266508.jpeg",
      name: "Заголовок 4",
      subname: "Подзаголовок 4",
    },
    {
      id: 5,
      url:
        "https://www.iphones.ru/wp-content/uploads/2020/09/5E6BAFC8-85C1-4F85-8481-6DFD79266508.jpeg",
      name: "Заголовок 5",
      subname: "Подзаголовок 5",
    },
  ];
  return (
    <div className="home-container">
      <div className="home-slider">
        <Carousel
          swipeable={true}
          draggable={false}
          autoPlay={false}
          autoPlaySpeed={3000}
          infinite={true}
          showDots={true}
          keyBoardControl={true}
          transitionDuration={500}
          arrows={false}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          containerClass={"home-slider__list"}
          dotListClass={"home-slider__dot-list"}
          itemClass={"home-slider__item"}
          responsive={responsive}
        >
          {sliderArr.map((i) => (
            <div key={i["id"]} className="home-slider__content">
              <div className="home-slider__content-wrapper-img">
                <img
                  src={i["url"]}
                  alt={"картинка " + i.id}
                  className="home-slider__content-img"
                />
              </div>

              <div className="home-slider__content-text">
                <h2 className="home-slider__content-text-title">{i["name"]}</h2>
                <p className="home-slider__content-text-subtitle">
                  {i["subname"]}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HomeSlider;
