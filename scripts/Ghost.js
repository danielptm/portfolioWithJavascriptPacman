

function Ghost(){
	this.xPos =110;
	this.yPos=85;
	var st = document.createElement("img");
	st.setAttribute("src","game/ghost.png");
	st.setAttribute("alt", "could not find ghost.png");
	this.ghostMan = st;
	
	this.moveGhost = function(){
		if( (this.xPos>=90)&&(this.xPos<=130)&&(this.yPos===85) ){
			this.xPos++;
		}
		else{
			this.yPos=80;
			this.xPos--;
			if(this.xPos===90){
				this.yPos=85;
			}
		}
	}
}