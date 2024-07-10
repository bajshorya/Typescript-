function greet(firstname: string) {
  console.log("Hello" + firstname);
}
//type infrence : the function automatically guesses what tyoe is being returned
function add(a: number, b: number): number {
  //function add(a: number, b: number) {
  return a + b;
}
greet("Harkirat ");
//this is how you give type to a function example : callback function 
function runAfter1sec(fn: () => void) {
  setTimeout(fn, 1000);
}
runAfter1sec(function () {
  console.log("hi there");
});
