function pinkAction (){
  up();
  up();
  up();
    if (getColor() == "blue") {
      right();
      up();
    }
    if (getColor() == "red") {
      left();
      up();
    }
}
right();
  if (getColor() == "blue") {
    down();
    down();
    down();
    	if (getColor() == "red") {
        left();
        down();
      }
    else {
    right();
    down();
    }
  }
else pinkAction();
