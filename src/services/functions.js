/*
  creates a function that invokes theFunc once it's called n or more times
  in the after function, create a variable to be a counter
  create a new function called theAfter in the after function
  when theAfter is called increment the counter
  if counter === times, call theFunc()
  return the theAfter
 */
export function after(times, theFunc){
    var counter=3;

    const theAfter = () => {
        console.log('counter, times', counter, times);
        if (counter === times) {
            theFunc();
        }
    };
    counter += 1;
    console.log('counter, times outside', counter, times);

    return theAfter();

}

/*
  creates a function that invokes theFunc while it's called n or less times
  create a variable to be a counter
  create a new function called theBefore in the before function
  when theBefore is called increment the counter
  if counter <= times, call theFunc()
  return the theBefore
 */
export function before(times, theFunc){
    //return true;
}

/*
Creates a function that is restricted to invoking theFunc once.
Repeat calls to the function return the value of the first invocation.
create a variable called firstValue and set it to null
create a new function called theOnce
in theOnce check if firstValue is null,
    if so call theFunc and assign the returned value into firstValue
return firstValue
return theOnce
 */
export function once(theFunc){
    //return true;
}
