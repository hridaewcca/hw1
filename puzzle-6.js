function pinkAction (){
  up();
  up();
  up();
    if (getColor() == "blue") {
      right();
      up();
    }
    if (getColor() == "pink") {
      left();
      up();
    }
}
right();
  if (getColor() == "blue") {
    down();
    down();
    down();
    left();
    down();
  }
else pinkAction();
