var width = 100;
var height = 200;

function blockSquare (x, y) {
  return x * y;
}

for(var i = 0; i < 10; i++) {
  width += 10;
  console.log(blockSquare(width, height));
}