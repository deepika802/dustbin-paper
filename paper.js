class Paper{
	constructor(x,y,r,image)
	{

		var options={
		
		isStatic:false,
        restitution:0.3,
		density:1.2,
		friction:0

		}
	
		this.x=x;
		this.y=y;
		this.r=r;
        this.image = loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
		

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			fill("white")
			imageMode(CENTER)
			image(this.image, 0, 0, this.r, this.r);
			
			
			
			pop()
	}

}