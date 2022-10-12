# Coding challenge

This project was Material UI (MUI) v5 with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Coding challenge

### Details:

You need to write a program which will produce an image in which each colour occurs exactly once -- with no repetition and no used colours. Colours are formed by combining a red, green, and blue component in the range 0..256; your program will need to break each component into 32 steps -- 8, 16,24, .. 256 -- which means you will have 32,768 discrete colours. Your image will therefore need to be sized to accommodate exactly this number of unique colours -- for example, 256x128px (although other dimensions are possible). The result should be aesthetically pleasing (or at least interesting) and should not use any existing graphics or other files. Your submission will be evaluated in terms of good development practices followed, cleanliness of code, the elegance of the algorithm you use, and the originality of your approach. We’re also looking to see that your app doesn’t greatly impact the browser performance.

### Process:

1). First we need to create combination list which number start with 8 and end with 256 and number divied by 8 and this combination list follows as Read, Green and Blue.
2). After we creating possible uniq colors RGB values.

##### Thanks
