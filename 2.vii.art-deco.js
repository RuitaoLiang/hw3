function setup() {
  createCanvas(1360,400);
  
  var x= 50;
var y= 150;
  
for(a=0; a<=5; a+=1){

	  y=150;
var num = 0;
  
while(num < 4){
	stroke(4);
  noFill();
	rect(x, y, 15+num*30, 15+num*30);
	x=x-15;
  y= y-15;
  num += 1;
  }
  x+=200;

}
	
}
