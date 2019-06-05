  var result = function  (){
  var sideone = parseFloat(document.getElementById('sideA').value);
  var sidetwo = parseFloat(document.getElementById('sideB').value);
  var sidethree = parseFloat(document.getElementById('sideC').value);

  var sides = [sideone, sidetwo, sidethree];

  if(isNaN(sideone)){
    alert("Please enter a value to Side A.");
    return;
  }else if(isNaN(sidetwo)){
      alert("Please enter a value to Side B.");
      return;
  }else if(isNaN(sidethree)){
      alert("Please enter a value to Side C.");
      return;
  }

    if(sides[0]<=0 || sides[1]<=0 || sides[2]<=0){
     document.getElementById('resultOutput').innerHTML = sides + " This values cannot form a Triangle.";
    }else if(sides[0]+sides[1]<=sides[2] || sides[0]+sides[2]<=sides[1] || sides[1]+sides[2]<=sides[0]){
     document.getElementById('resultOutput').innerHTML = sides + " This values cannot form a Triangle!";
    }else if(sides[0]!==sides[1] && sides[0]!==sides[2] && sides[1]!==sides[2]){
      document.getElementById('resultOutput').innerHTML = sides + " This is Scalene Triangle.";
    }else if(sides[0]===sides[1] && sides[0]===sides[2] && sides[1]===sides[2]){
      document.getElementById('resultOutput').innerHTML = sides + " This is an Equilateral Triangle.";
    }else if(sides[0]===sides[1] || sides[0]===sides[2] || sides[1]===sides[2]){
      document.getElementById('resultOutput').innerHTML = sides + " This is an Isosceles Triangle.";
    }
  }
  
