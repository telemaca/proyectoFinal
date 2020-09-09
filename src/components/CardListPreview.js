import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../styles/carousel.scss";

import useLanguageContext from "../contexts/LanguageContext";

import BasicCard from "./CardMovie";
import Section from "./native components/Section";

const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 4vw;
`;
const StyledContainerFlex = styled(ContainerFlex)`
  justify-content: flex-start;
  padding: 0;
  align-items: center;
`;
const Title = styled.h3`
  margin-left: 2.4vw;
  font-size: 1.6rem;
  font-weight: 400;
  font-family: roboto;
  letter-spacing: 0.4px;
  color: #fff;
  @media (max-width: 280px) {
    font-size: 1rem;
  }
`;

const StyledExploreLink = styled(Link)`
  margin-left: 2vw;
  text-decoration: none;
  font-size: 14px;
  font-family: roboto;
  color: #2196f3;
`;

const TITLE = {
  eng: "Explore All",
  spa: "Ver todas",
};

const CardListPreview = ({ title, elements, categoryId, media_type }) => {
  const { language } = useLanguageContext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,          
          initialSlide: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,          
          initialSlide: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Section>
      <StyledContainerFlex>
        <Title>{title}</Title>
        <StyledExploreLink to={`category/${categoryId}/${media_type}`}>
          {" "}
          {TITLE[language]}
        </StyledExploreLink>
      </StyledContainerFlex>
      <Slider {...settings}>
        {elements &&
          elements.map((element, i) => (
            <BasicCard
              component="carousel"
              key={i}
              data={element}
              media_type={media_type}
            />
          ))}
      </Slider>
    </Section>
  );
};
export default CardListPreview;
