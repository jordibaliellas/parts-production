export const randomNum = (max: number = 10, min: number = 0) =>
  Math.floor(Math.random() * (max - min) + min);
