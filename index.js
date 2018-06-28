//Your code here
//justInvoke(fn): The function simply invokes the function passed through to it. It also returns the return value of the passed through function.

function justInvoke(fn) {
  return fn();
};

//setThisWithCall(fn, thisValue, arg): The function again invokes the function passed to it, but uses the call method to return the function's this value. (Make sure to correctly pass the third argument!)

function setThisWithCall(fn, thisValue, arg) {
  fn();
};
