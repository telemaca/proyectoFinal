import React from "react";
import styled from "styled-components";
import BasicCard from "./CardMovie";
import Container from "./native components/Container";

const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 4vw;
`;

const Title = styled.h3`
  margin-left: 2.4vw;
  font-size: 1.6rem;
  font-weight: 400;
  font-family: roboto;
  letter-spacing: 0.4px;
  color: #fff;
`;
const CardListPreview = ({ title, elements }) => {
  return (
    <Container backgroundColor="black">
      <Title>{title}</Title>
      <ContainerFlex>
        {elements && elements.map((element) => <BasicCard data={element} />)}
      </ContainerFlex>
    </Container>
  );
};
export default CardListPreview;
