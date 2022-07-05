var canvas = document.querySelector('canvas');
console.log(canvas);
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext("2d");
//we can create 2d element which can be manipulated in 2d space
// c.fillStyle="red";
// c.fillRect(50,837,100,100);
// c.fillStyle="blue";
// c.fillRect(60,757,80,80);
// c.fillStyle="green";
// c.fillRect(70,697,60,60);
// c.fillStyle="yellow";
// c.fillRect(80,657,40,40);
// c.fillStyle="lime";
// c.fillRect(90,637,20,20);
// c.beginPath();
// c.moveTo(60,837);
// c.lineTo(100,757);
// c.lineTo(140,837);
// c.lineTo(60,790);
// c.lineTo(140,790);
// c.lineTo(60,837);
// c.strokeStyle= "pink";
// c.stroke();
//arc /circle
// let bool=false;
// for(let i=0;i<200;i+=10)
// {
//     if(bool===true)
//     {
//         c.beginPath();
//         c.arc(400,457,200-i,0,Math.PI*0.5,bool);
//         c.strokeStyle="brown";
//         c.stroke();
//         bool=false;
//     }
//     else
//     {
//         c.beginPath();
//         c.arc(400,457,200-i,0,Math.PI*0.5,bool);
//         c.strokeStyle="brown";
//         c.stroke();
//         bool=true;
//     }
// }
function Circle(x,y,dx,dy,radius/*,colour*/)
{
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    // this.colour=colour;
    this.draw=function()
    {
        //requestAnimationFrame(draw);
        c.beginPath();
        c.arc(this.x,this.y,this.radius,Math.PI*2,false);
        c.strokeStyle="#"+((1<<24)*Math.random()|0).toString(16);
        c.stroke();
    }
    this.update=function()
    {
        if(this.x+this.radius>innerWidth|| this.x-this.radius<0)
        {
            this.dx=-this.dx;
        }
        if(this.y+this.radius>innerHeight|| this.y-this.radius<0)
        {
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();
    }
}

var circlearray=[];
for(let i=0;i<100;i++)
{   
    let radius=Math.random()*100;
    let x=Math.random()*(innerWidth-2*radius);
    let dx=(Math.random()-0.5)*10;
    let y=Math.random()*(innerHeight-2*radius);
    let dy=(Math.random()-0.5)*10;
    //let colour="#"+((1<<24)*Math.random()|0).toString(16);
    circlearray[i]=new Circle(x,y,dx,dy,radius/*,colour*/);
}
function animate()
{
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(let i=0;i<circlearray.length;i++)
    {
        circlearray[i].update();
    }
}
animate();