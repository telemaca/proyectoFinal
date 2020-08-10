import React from "react";
import styled from 'styled-components'

const Title = styled.h3 `
  font-size: 1.6rem;
  font-weight: 400;
  font-family: roboto;
  letter-spacing: .4px;
  color: #fff;
`
const CardListPreview = ({title, children}) => {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  )
}
export default CardListPreview;
