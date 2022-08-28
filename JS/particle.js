class Particle
{
    position;
    color;
    speed;
    constructor(position = new Point(0,0), color = new Color(), speed = new Point (0,0))
    {
        this.position = position;
        this.color = color;
        this.speed = speed;
    }
}