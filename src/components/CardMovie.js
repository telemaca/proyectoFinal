import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Rating from "./Rating";

const Card = styled.article`
  margin: 0.2vw;
  @media (max-width: 850px) {
    width: 26vw;
    margin-right: 3vw;
  }
`;

const Img = styled.img`
  width: 15.4vw;
  height: 23vw;
  transition: 0.3s;
  &:hover {
    transform: scale(1.02);
    transition: 0.3s;
    cursor: pointer;
  }
  @media (max-width: 850px) {
    height: ${(props) => (props.component === "list" ? "40vw" : "30vw")};
  }
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 14px;
  font-weight: 300;
  font-family: roboto;
  letter-spacing: 0.4px;
  color: #fff;
  width: 90%;
  max-width: 15vw;
`;

const BasicCard = ({
  data,
  customStyle,
  media_type,
  component = "list",
  ...props
}) => {
  const { title, poster_path, vote_average, name, id } = data;
  const history = useHistory();

  const handleMediaClick = (id, media_type) => {
    history.push(`/${media_type}/${id}/info`);
  };

  return (
    <Card
      key={id}
      id={id}
      style={customStyle}
      media_type={media_type}
      component={component}
      {...props}
    >
      <Img
        component={component}
        src={
          poster_path === null
            ? "https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available.jpg"
            : `http://image.tmdb.org/t/p/w342/${poster_path}`
        }
        onClick={() => handleMediaClick(id, media_type)}
      />
      <Title>{title || name}</Title>
      <Rating rating={vote_average} component="card" />
    </Card>
  );
};

export default BasicCard;
