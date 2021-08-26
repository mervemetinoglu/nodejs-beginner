const circleArea = (radius) => {
  let area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
  console.log("The area of circle is: ", area);
};

const circleCircumference = (radius) => {
  let circumference = (Math.PI * 2 * radius).toFixed(2);
  console.log("The circumference of circle is: ", circumference);
};

export { circleArea, circleCircumference };
