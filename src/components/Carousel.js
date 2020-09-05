/* import React from "react";
import styled from "styled-components"
import Slider from "react-slick";
import BasicCard from "./CardMovie"
import useMoviesContext  from "../contexts/MoviesContext"

const Title = styled.h3`
  margin-left: 2.4vw;
  font-size: 1.6rem;
  font-weight: 400;
  font-family: roboto;
  letter-spacing: 0.4px;
  color: #fff;
`;

const StyledContainerFlex = styled.div`
    display: flex;
  justify-content: flex-start;
  padding: 0;
  align-items: center;
`;

const StyledExploreLink = styled(Link)`
  margin-left: 2vw;
  text-decoration: none;
  font-size: 14px;
  font-family: roboto;
  color: #2196f3;
`;

const Carousel = ({data, title, categoryId, media_type}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    }
    const {popularMovies} = useMoviesContext()
    return (
        <>
        <Section>
      <StyledContainerFlex>
        <Title>{title}</Title>
        <StyledExploreLink to={`${media_type}/category/${categoryId}`}>
          {" "}
          Explore All
        </StyledExploreLink>
      </StyledContainerFlex>
        <Slider {...settings}>
            {data && data.map((element, i) => (
              <BasicCard key={i} data={element} media_type={element.media_type} />
            ))}
        </Slider>
        </Section>
        </>
    )
}

export default Carousel */
