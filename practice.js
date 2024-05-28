const convertFToC = (ArrayOfF) => {
  const celciusArray = [];
  for (i = 0; i < ArrayOfF.length; i++) {
    celciusArray.push(((ArrayOfF[i] - 32) * 5) / 9);
  }
  return celciusArray;
};

const modifyArray = (arr, transformFunc) => {
  return transformFunc(arr);
};

const transformFToC = (arr) => {
  for (i = 0; i < arr.length; i++) {
    arr[i] = ((arr[i] - 32) * 5) / 9;
  }
};

const rectangles = [
  { width: 1, height: 1 },
  { width: 5, height: 10 },
  { width: 6, height: 6 },
];

const newArray = rectangles.map((rectangle) => {
  return rectangle.width * rectangle.height;
});

let bigRectangles = rectangles.filter(
  (rectangle) => rectangle.width > 10 || rectangle.height > 10
);
