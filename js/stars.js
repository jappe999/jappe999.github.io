var c=document.getElementById("c"),ctx=c.getContext("2d"),height=window.innerHeight,width=window.innerWidth,stars=[],size=6,color="255,255,255",maxStars=1E3;c.width=width;c.height=height;function star(){this.size=2*Math.random();this.x=1*Math.random()*width;this.y=1*Math.random()*height;this.transparency=0;this.speed=Math.random()/4;this.direction=1}
star.prototype.update=function(){ctx.fillStyle="rgba("+color+","+this.transparency+")";ctx.fillRect(this.x,this.y,this.size,this.size);1<=this.transparency?this.direction=-1:0>=this.transparency&&(this.direction=1);this.transparency=1==this.direction?this.transparency+.05*this.speed:this.transparency-.05*this.speed;ctx.stroke()};function draw(){ctx.clearRect(0,0,width,height);for(var a=0;a<maxStars;a++)stars[a].update();window.requestAnimationFrame(draw)}
function init(){for(var a=0;a<maxStars;a++){var b=new star;stars.push(b)}window.requestAnimationFrame(draw)}init();
