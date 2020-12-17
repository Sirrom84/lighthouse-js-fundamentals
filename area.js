function calculateRectangleArea(length, width) {
  let x = length * width
  
  if (x < 0 || x === - 0) {
    console.log("undefined");
  }else {
    return x;
    
  }
  
} console.log(calculateRectangleArea(10, 5));

function calculateTriangleArea(base, height) {
  let x = (base * height) / 2;

  if (x < 0 || x === - 0) {
    console.log("undefined");
  }else {
    return x;
    
  }
}


function calculateCircleArea(radius) {
  
  let x =  Math.PI * (radius * radius)
  
  if (radius < 0) {
    console.log("undefined");
  }else {
    return x;
        
  }
}
