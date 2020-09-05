import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";

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
`;

const StyledExploreLink = styled(Link)`
  margin-left: 2vw;
  text-decoration: none;
  font-size: 14px;
  font-family: roboto;
  color: #2196f3;
`;

const CardListPreview = ({ title, elements, categoryId, media_type }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
}
  return (
    <Section>
      <StyledContainerFlex>
        <Title>{title}</Title>
        <StyledExploreLink to={`category/${categoryId}/${media_type}`}>
          {" "}
          Explore All
        </StyledExploreLink>
      </StyledContainerFlex>
      <Slider {...settings}>
            {elements && elements.map((element, i) => (
              <BasicCard key={i} data={element} media_type={media_type} />
            ))}
        </Slider>
      {/* <ContainerFlex>
        {elements &&
          elements
            .slice(0, 5)
            .map((element, i) => (
              <BasicCard key={i} data={element} media_type={media_type} />
            ))}
      </ContainerFlex> */}
    </Section>
  );
};
export default CardListPreview;
