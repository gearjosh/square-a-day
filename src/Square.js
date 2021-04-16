import styled from "styled-components";
import React, { useState } from "react";

// an art
// {
//   image: link_to_image,
//   dateAdded: self-explanatory,
//   size: 1, 2, or 3,
//   description: string
// }

function Square(props) {

  const SquareContainer = styled.div`
    height: ${props.gridSize}vw;
    display: block;
    grid-column-end: span ${props.size};
    grid-row-end: span ${props.size};
    overflow: hidden;
    /* grid-gap: 1rem; */
  `;

  const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `;

  return (
    <SquareContainer>
      <Img src={props.img} />
    </SquareContainer>
  );
}

export default Square;
