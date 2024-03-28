export function capitalizeSentence(mySentence: string) {
  const words = mySentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
}

export const isValidDate = (dateString) => {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};
