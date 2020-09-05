
import React from "react";
import Slider from "react-slick";
import BasicCard from "./CardMovie"
import useMoviesContext  from "../contexts/MoviesContext"
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    }
    const {popularMovies} = useMoviesContext()
    return (
        <Slider {...settings}>
            {popularMovies && popularMovies.map((element, i) => (
              <BasicCard key={i} data={element} media_type={element.media_type} />
            ))}
        </Slider>
    )
}

export default Carousel
