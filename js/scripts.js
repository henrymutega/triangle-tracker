var result = function  (){
  var sideone = parseFloat(document.getElementById('sideA').value);
  var sidetwo = parseFloat(document.getElementById('sideB').value);
  var sidethree = parseFloat(document.getElementById('sideC').value);

var sides = [sideone, sidetwo, sidethree];

   if(sides[0]<=0 || sides[1]<=0 || sides[2]<=0){
     document.getElementById('resultOutput').innerHTML = "Invalid inputs.";
   }else if(sides[0]+sides[1]<=sides[2] || sides[0]+sides[2]<=sides[1] || sides[1]+sides[2]<=sides[0]){
       document.getElementById('resultOutput').innerHTML = "This is not a Triangle!";
  }else if(sides[0]!==sides[1] && sides[0]!==sides[2] && sides[1]!==sides[2]){
    document.getElementById('resultOutput').innerHTML = "This is Scalene Triangle.";
  }else if(sides[0]===sides[1] && sides[0]===sides[2] && sides[1]===sides[2]){
    document.getElementById('resultOutput').innerHTML = "This is an Equilateral Triangle.";
  }else if(sides[0]===sides[1] || sides[0]===side[2] || sides[1]===sides[2]){
    document.getElementById('resultOutput').innerHTML = "This is an Isosceles Triangle.";
}
}
