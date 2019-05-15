
/*

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]

*/


function array_diff(a, b) {
  var diference = [];
  for (var i = 0; i < a.length; i++){
  var checkNumber = true;
    for (var cont = 0; cont < b.length; cont++){
      
     //Check if the number exists on array
     if (a[i] != b[cont]){       
       
       checkNumber = true;
     
     } else {
      
        checkNumber = false;
        break
  
      }
      
    }
    //Add num on Third Array
    if (checkNumber == true){
      diference.push(a[i]);
    }
  }
  return diference;
}