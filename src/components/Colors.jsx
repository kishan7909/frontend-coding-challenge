import React from "react";

const Colors = () => {
  const rgbColours = createColours();

  function createColours() {
    let red = rangeDivisibleByEight(8, 256);
    let green = rangeDivisibleByEight(8, 256);
    let blue = rangeDivisibleByEight(8, 256);
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
    console.log("length equals " + allColours.length);

    return shuffleColours(allColours);
  }

  function rangeDivisibleByEight(start, end) {
    let ans = [];
    for (let i = start; i <= end; i++) {
      if (i !== 0 && i % 8 === 0) {
        ans.push(i);
      }
    }
    return ans;
  }

  function shuffleColours(array) {
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
  }

  return (
    <div
      style={{
        width: "80%",
        position: "relative",
        margin: "5% 10%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {rgbColours.map((colour, index) => {
        return (
          <div
            key={index}
            id={index}
            style={{ backgroundColor: colour }}
            className="square button-img"
          ></div>
        );
      })}
    </div>
  );
};

export default Colors;
