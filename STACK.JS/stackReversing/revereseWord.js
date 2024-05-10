function reverseOrderOfTheWord(string) {
  if (string == "") {
    console.log("string is empty");
    return;
  }
  let arr = string.split(" ");
  const stack=[]
  for (const word of arr) {
    stack.push(word)
  }
  let reversed=''
  while (stack.length) {
    reversed+=`${stack.pop()} `
  }
console.log(reversed);
  
  return reversed.trim()
}
const string = "blue is sky the";
console.log(reverseOrderOfTheWord(string));




