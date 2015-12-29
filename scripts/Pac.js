
function Pac(){
	this.xPos =110;
	this.yPos=146;
	var man = document.createElement("img");
	man.setAttribute("id","pacId");
	man.setAttribute("src", "game/pacUp/pacUp.png");
	man.setAttribute("alt", "pacman not found");
	this.pacman = man;

	this.moveLeft = function(face){
		if(face===0){this.pacman.setAttribute("src","game/pacLeft/bigLeft.png");}
		else if(face===1){this.pacman.setAttribute("src","game/pacLeft/pacLeft.png");}
		else if(face===2){this.pacman.setAttribute("src","game/pacLeft/smallLeft.png");}
		if( ((this.xPos>26)&&(this.yPos===146))||((this.xPos>26)&&(this.yPos===23)) ){
			this.xPos -= 3;
		}
		
	}
	
	this.moveRight =function(face){
		if(face===0){this.pacman.setAttribute("src","game/pacRight/bigRight.png");}
		else if(face===1){this.pacman.setAttribute("src","game/pacRight/pacRight.png");}
		else if(face===2){this.pacman.setAttribute("src","game/pacRight/smallRight.png");}
		if( ((this.xPos<206)&&(this.yPos===146))||( (this.yPos===23)&&(this.xPos<206) ) ){
			this.xPos+=3;
		}
	}
	
	this.moveUp = function(face){
		if(face===0){this.pacman.setAttribute("src","game/pacUp/bigUp.png");}
		else if(face===1){this.pacman.setAttribute("src","game/pacUp/pacUp.png");}
		else if(face===2){this.pacman.setAttribute("src","game/pacUp/smallUp.png");}
		if( ((this.xPos===206)&&(this.yPos>23))||((this.xPos===26)&&(this.yPos>23)) ){
			this.yPos-=3;
		}
		
	}
	this.moveDown=function(face){
		if(face===0){this.pacman.setAttribute("src","game/pacDown/bigDown.png");}
		else if(face===1){this.pacman.setAttribute("src","game/pacDown/pacDown.png");}
		else if(face===2){this.pacman.setAttribute("src","game/pacDown/smallDown.png");}
		if( ((this.xPos===206)&&(this.yPos<146))||((this.xPos===26)&&(this.yPos<146)) ){
			this.yPos+=3;
			
		}
	}
}