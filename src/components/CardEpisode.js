import React from "react";
import styled from "styled-components";

const Card = styled.article`
  width: 22vw;
  margin: 0 5vw 3vw 0;
  overflow: hidden;
  line-height: 20px;
`;

const Img = styled.img`
  width: 100%;
`;

const Title = styled.h3`
  margin: 0 10px;
  font-size: 16px;
  font-weight: 600;
  font-family: roboto;
  letter-spacing: 0.4px;
  color: #fff;
`;

const Text = styled.p`
  font-size: 12px;
  letter-spacing: 0.2px;
  font-family: roboto;
  color: #fff;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const Strong = styled.strong`
  color: #2196f3;
  font-size: 16px;
  font-weight: 300px;
  font-family: roboto;
`;

const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Span = styled.span`
  color: #80868b;
  font-family: Roboto;
  font-size: 14px;
  letter-spacing: 0.4px;
`;

const CardEpisode = ({ data }) => {
  const { still_path, episode_number, name, overview, air_date } = data;

  const date = new Date(air_date);
  const episodeYear = date.getFullYear();
  const episodeMonth = date.getMonth();
  const episodeDay = date.getDate() + 1;

  const getEpisodeMonth = () => {
    const meses = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const mes = meses[episodeMonth];
    return mes;
  };

  return (
    <Card>
      <Img src={`http://image.tmdb.org/t/p/w342/${still_path}`} />
      <ContainerFlex>
        <Strong>
          {" "}
          E{episode_number <= 9 ? "0" + episode_number : episode_number}
        </Strong>
        <Title>{name}</Title>
      </ContainerFlex>
      <Span>{`${episodeDay} ${getEpisodeMonth()}, ${episodeYear}`}</Span>
      <Text>{overview}</Text>
    </Card>
  );
};

export default CardEpisode;
