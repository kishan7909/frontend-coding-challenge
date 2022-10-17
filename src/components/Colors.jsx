import React, { useEffect, useState } from "react";
import ColorItems from "./ColorItems";
import RenderColors from "./RenderColors";

const Colors = () => {
  const [rbgColors, setRbgColors] = useState([]);
  const [redColors, setRedColors] = useState([]);
  const [greenColors, setGreenColors] = useState([]);
  const [blueColors, setBlueColors] = useState([]);

  useEffect(() => {
    generateColors();
  }, []);

  const rangeDivisibleByEight = (start, end) => {
    let ans = [];
    for (let i = start; i <= end; i++) {
      if (i !== 0 && i % 8 === 0) {
        ans.push(i);
      }
    }
    return ans;
  };

  const shuffleColours = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const generateColors = () => {
    let red = rangeDivisibleByEight(8, 256);
    let green = rangeDivisibleByEight(8, 256);
    let blue = rangeDivisibleByEight(8, 256);

    setRedColors(red);
    setGreenColors(green);
    setBlueColors(blue);

    let allColors = createColors(red, green, blue);
    setRbgColors(allColors);

    console.info("----------------------------");
    console.info("red length =>", red.length);
    console.info("green length =>", green.length);
    console.info("blue length =>", blue.length);
    console.info("RGB length =>", allColors.length);
    console.info("----------------------------");
  };

  const createColors = (red, green, blue) => {
    let allColours = [];
    let i = 0;
    while (i < red.length) {
      const redRandomIndex = Math.floor(Math.random() * red.length);
      const redValue = red[redRandomIndex];
      red.splice(redRandomIndex, 0);
      i++;

      let j = 0;
      while (j < blue.length) {
        const blueRandomIndex = Math.floor(Math.random() * blue.length);
        const blueValue = blue[blueRandomIndex];
        blue.splice(blueRandomIndex, 0);
        j++;

        let k = 0;
        while (k < green.length) {
          const greenRandomIndex = Math.floor(Math.random() * green.length);
          const greenValue = green[greenRandomIndex];
          green.splice(greenRandomIndex, 0);

          const rgb = `rgb(${redValue},${greenValue},${blueValue})`;
          allColours.push(rgb);

          k++;
        }
      }
    }

    return shuffleColours(allColours);
  };

  return (
    <>
      <ColorItems>
        <h3>Red</h3>
        {redColors.map((colour, index) => {
          const rgb = `rgb(${colour},0,0)`;
          return <RenderColors key={index} rgb={rgb} />;
        })}
      </ColorItems>
      <ColorItems>
        <h3>Green</h3>
        {greenColors.map((colour, index) => {
          const green = `rgb(0,${colour},0)`;
          return <RenderColors key={index} rgb={green} />;
        })}
      </ColorItems>
      <ColorItems>
        <h3>Blue</h3>
        {blueColors.map((colour, index) => {
          const blue = `rgb(0,0,${colour})`;
          return <RenderColors key={index} rgb={blue} />;
        })}
      </ColorItems>

      <ColorItems>
        <h3>RGB Colors</h3>
        {rbgColors.map((colour, index) => {
          return <RenderColors key={index} rgb={colour} />;
        })}
      </ColorItems>
    </>
  );
};

export default Colors;
