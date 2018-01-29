function lineDown (){
  while (getColor() !="red") {
      down();
  }
  right();
}
function lineUp (){
  while (getColor() !="red") {
    up();
  }
  right();
}
lineDown();
right();
lineUp();
right();
lineDown();
right();
lineUp();
right();
lineDown();
