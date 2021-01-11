class dustbin
{
    constructor(x,y,width,height)
    {
        var dustbin_options=
        {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,dustbin_options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;

    }

    display()
    {
        push();
        fill("blue")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop();

    }
}