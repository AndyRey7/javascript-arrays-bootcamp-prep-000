var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array,element){return [element,...array]}
function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);  //first add element to beginning of array
  return array //then return the array
    }
    function addElementToEndOfArray(array, element){return[...array,element]}
    function destructivelyAddElementToEndOfArray(array, element){ array.push(element);return array}
    //function accessElementInArray(){var names=["jack", "bob"];return console.log(names[0])}//
    function accessElementInArray(array, index) {var element=['jack', 'bob', 'susan', 'jude']; return element[3]}