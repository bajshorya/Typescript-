//enums
enum Direction {
  Up, //0
  Down, //1
  Left, //2
  Right, //3
}

function doSomething(keyPressed: Direction) {
  if (keyPressed == Direction.Down) {
    console.log("Down");
  } else {
    console.log("correct direction ");
  }
}

doSomething(Direction.Up);
console.log(Direction.Down);
//genrics
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}
const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase());
