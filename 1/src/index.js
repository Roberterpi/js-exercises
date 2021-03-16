const side1 = 5;
const side2 = 6;
const side3 = 7;

// calculate the perimeter
const perimeter = (side1 + side2 + side3) / 2;

//calculate the area
const area = Math.sqrt(
  perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3))
);
console.log(area);
