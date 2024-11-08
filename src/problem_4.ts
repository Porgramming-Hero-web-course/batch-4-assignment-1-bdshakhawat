{
// 

/*Problem 4:
Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
24;
*/

// Solution of problem 4:
type Circle = { shape: "circle"; radius: number };
type Rectangle = { shape: "rectangle"; width: number; height: number };

function calculateShapeArea(shape: Circle | Rectangle): number {
    
    if (shape.shape === "circle") {
        return Number((Math.PI * shape.radius ** 2).toFixed(2));
    } else {
        return shape.width * shape.height;
    }
}

// Input:1
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

// Input:2
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(rectangleArea);


















// 



}