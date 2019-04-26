import React from "react";
import ImageCard from "./components/imagecard";
import Wrapper from "./components/Wrapper";
import Images from "./images.json";
// import "./App.css";

function App() {
  return (
    <div>
      <Wrapper>
      {Images.map((element, i) => {
        return (
          <ImageCard
            key={i}
            name={element.name}
            image={element.image}
          />
        )
      })}
    </Wrapper>
    </div> 
  );
}

export default App;
