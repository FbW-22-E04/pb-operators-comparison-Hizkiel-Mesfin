// tast #0
const apples = 20;
const oranges = 30;

// tast #1
console.log("task #1");
console.log(apples === oranges);

// tast #2
console.log("task #2");
console.log(apples !== oranges);

// tast #3
console.log("task #3");
console.log(apples > oranges);

// tast #4
console.log("task #4");
console.log(apples <= oranges);

// tast #5
console.log("task #5");
console.log(oranges > apples);

// tast #6
console.log("task #6");
const mangoes = 30;
console.log(mangoes * apples > mangoes + oranges);

// tast #7
console.log("task #7");
console.log(apples - mangoes < oranges / mangoes);

// tast #8
console.log("task #8");
console.log(
  apples === oranges ? oranges === mangoes : "They are not equal to eachother"
);

// tast #9
console.log("task #9");
console.log(apples % mangoes === oranges % mangoes);

// tast #10
console.log("task #10.1");
console.log(mangoes + apples > oranges - mangoes);

//The operation that would give a true boolean value is an strict equality operation
console.log("task #10.2");
console.log(mangoes + apples === oranges - mangoes);
