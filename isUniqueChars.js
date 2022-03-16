// Program to check if a string has all unique characters or not
const isUniqueChars = (str) => {
  // considering the 128 ascii characters
  if (str.length > 128) {
    return false;
  }

  const char_set = [];
  for (let i = 0; i < str.length; i++) {
    let val = str[i];
    if (char_set[val]) {
      return false;
    }
    char_set[val] = true;
  }
  return true;
};

let input_char = "ab&2cdeg5kf&";
const result = isUniqueChars(input_char);
console.log(
  "The word has " + (result ? "unique" : "non unique") + " characters"
);
