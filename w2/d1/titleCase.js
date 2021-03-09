function titleCase(title, minorWords) {
  minorWords = (minorWords || "").toLowerCase().split(' ');
  title = title.toLowerCase();
  return title.replace(/(\w)\w*/g, (word, firstChar, index) => {
    if (index === 0 || minorWords.indexOf(word) === -1)
      word = word.replace(firstChar, firstChar.toUpperCase());
    return word;
  });
}


// https://www.codewars.com/kata/5202ef17a402dd033c000009/solutions/javascript