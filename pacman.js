function Pacman(xCord, yCord, direction){
	this.x = xCord;
	this.y = yCord;
	this.dir = direction;
	this.nextDir = undefined; 
	this.radius = PACMAN_RADIUS;
	this.mouthOpen = true;
}
