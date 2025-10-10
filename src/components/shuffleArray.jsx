export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = 0; i < newArray.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
