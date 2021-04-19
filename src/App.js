import styled from "styled-components";
import { drawings } from "./drawings";
import React, { useState } from "react";
import Square from './Square';

function App() {
  const [squareArray, setSquareArray] = useState(drawings);
  const sizeMultiplier = 7;

  const shuffle = (ogArray) => {
    const array = JSON.parse(JSON.stringify(ogArray));

    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }

    return array;
  }

  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${sizeMultiplier}vw, 1fr));
    /* grid-auto-rows: 1fr; */
    grid-auto-flow: dense;
  `;

  return (
    <Grid>
      {shuffle(squareArray).map((obj, i) => {
        return <Square img={obj.img} alt={obj.title} guestArtist={obj.guestArtist} size={obj.size} key={i} gridSize={obj.size * sizeMultiplier} />;
      })}
    </Grid>
  );
}

export default App;
