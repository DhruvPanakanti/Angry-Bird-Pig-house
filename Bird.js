class Bird {
constructor(x,y){
    var options={
        restitution:0.8,
        friction:1.0,
        density:0.3

    }
    this.body=Bodies.rectangle(x,y,50,50,options);
    this.width=50;
    this.height=50;
    World.add(world,this.body);
}
display(){
    var Anb=this.body.position; 
    var angle=this.body.angle;
    push()
    translate(Anb.x,Anb.y);
    rotate(angle);
    rectMode(CENTER);
    fill ("red");
    rect(0,0,this.width,this.height);
    pop ();
}

}