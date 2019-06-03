  var result = function(){
  var sideA = document.getElementById('sideA').value;
  var sideB = document.getElementById('sideB').value;
  var sideC = document.getElementById('sideC').value;

  var output = " ";

   if(sideA<=0 || sideB<=0 || sideC<=0){
    output = output + "Invalid inputs.";
  }else if(sideA!==sideB && sideA!==sideC && sideB!==sideC) (sideA+sideB>sideC && sideA+sideC>sideB && sideB+sideC>sideA){
    document.getElementById('result').value = output + "This is Scalene Triangle.";
  }else if(sideA===sideB && sideA===sideC && sideB===sideC){
    document.getElementById('result').value = output + "This is an Equilateral Triangle.";
  }else if(sideA===sideB || sideA===sideC || sideB===sideC){
    document.getElementById('result').value = output + "This is an Isosceles Triangle.";
  }else if(sideA+sideB<=sideC && sideA+sideC<=sideB && sideB+sideC<=sideA){
      document.getElementById('result').value = output + "This is not a Triangle!";
  }
};
