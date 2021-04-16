import styled from "styled-components";
import { drawings } from "./drawings";
import React, { useState } from "react";
import Square from './Square';

// an art
// {
//   image: link_to_image,
//   dateAdded: self-explanatory,
//   size: 1, 2, or 3,
//   description: string
// }

function App() {
  const [drawingArray, setDrawingArray] = useState(drawings);
  const sizeMultiplier = 7;

  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${sizeMultiplier}vw, 1fr));
    /* grid-auto-rows: 1fr; */
    grid-auto-flow: dense;
  `;

  return (
    <Grid>
      {drawingArray.map((obj, i) => {
        return <Square img={obj.img} alt={obj.title} guestArtist={obj.guestArtist} size={obj.size} key={i} gridSize={obj.size * sizeMultiplier} />;
      })}
    </Grid>
  );
}

export default App;
