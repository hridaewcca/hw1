function moveRight (){
	var steps = 0
		while (steps < 50){
			
				setColor ("blue")
				right();
				
			steps = steps + 1
		}
}
function moveDown (){				
	var steps = 0
		while (steps < 20){
			
				setColor ("blue")
				down();
				
			steps = steps + 1
		}
}
function moveLeft (){				
	var steps = 0
		while (steps < 50){
			
				setColor ("blue")
				left();
    	
			steps = steps + 1
    }
}
function moveUp (){				
	var steps = 0
		while (steps < 20){
			
				setColor ("blue")
				up();
				
			steps = steps + 1
		}
}
moveRight();
moveDown();
moveLeft();
moveUp();
