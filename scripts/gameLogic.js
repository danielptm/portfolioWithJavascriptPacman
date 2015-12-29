	var pac = new Pac()	
	var gh = new Ghost();
	var canvas = document.getElementById("cs");
	var cvCon = canvas.getContext("2d");
	var counter=0;
	
	function movePacMan(e){
		var key = e.keyCode;
		
		if(key===188){
			pac.moveLeft(counter);
		}
		else if(key===190){
			pac.moveRight(counter);
		}
		else if(key===76){
			pac.moveUp(counter);
		}
		else if(key===77){
			pac.moveDown(counter);
		}
		counter++;
		if(counter===3){counter=0;}
		drawPacMan();
		
	}
	
	
	function drawPacMan(){
		cvCon.clearRect(0,0,267,207);
		gh.moveGhost();
		cvCon.drawImage(pac.pacman, pac.xPos, pac.yPos, 38, 38);
		cvCon.drawImage(gh.ghostMan,gh.xPos, gh.yPos, 35, 35)
		
	}
	
	
	window.addEventListener("keydown",movePacMan, false);
	
	
	
	
	
	
	
	
	
