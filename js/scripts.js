
var romanArray = [1, "I", 5,"V", 10,"X", 50, "L", 100, "C", 500, "D", 1000, "M"];
var roman = {1:"I", 5:"V", 10:"X", 50:"L", 100:"C", 500:"D", 1000:"M"};

var array = [];

var arr2 = [];

var output = [];

function getInput() {
  var usrInput = $('input').val();
  return usrInput.split();
}




function primaryLoop(inputArray) {
  if (inputArray[0] <= 0) {return}

  // debugger;


  inputArray.forEach(function(number) {

    for(key in roman) {

      var remainder = number - key;

        for (i=0; remainder >= 0; i++) {

          array.push(key);

          remainder -= key;

        }

    }

  })

  var lastChar = array.pop();
  arr2.push(lastChar);
  var rem2 = [inputArray[0] - lastChar];
  primaryLoop(rem2);
  return arr2;
}

function format(formatArr) {

  formatArr.forEach(function(item) {
    output.push(roman[item]);
  });
  return output.join('');
}


function findNextHighest(str) {
  var re = str.match(/(CCCC)|(XXXX)|(IIII)/);
  var er = str.charAt(re['index'] - 1) || str.charAt(re['index']) ;
  console.log(re);
  console.log(er);
  var nextIndex = romanArray.indexOf(er) + 2;
  var nextHighest = re[0][0] + romanArray[nextIndex];
  console.log(nextHighest);
  return nextHighest;
}




// pop the last character from array
// find that characters value in the roman array
// subtract that value from input
// return this new value
// run the new value through primaryLoop


$(document).ready(function() {

  $('#num-sub').click(function() {

    var initialInput = getInput();

    console.log(initialInput);


    var val = primaryLoop(initialInput);
   var strVal = format(arr2);

    var minusVal = findNextHighest(strVal);

    var diff = minusVal - initialInput;





    array = [];

    arr2 = [];

    output = [];

    primaryLoop([diff]);



  });



});
