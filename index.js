// Add your Circle class here

class Circle{
  constructor(radius) {
    this.radius = radius;
  }
  get diameter(){
    return this.radius*2;
  }
  set diameter(newD){
    this.radius = newD/2;
  }
  get circumference(){
    return (Math.PI)*(this.diameter);
  }
   set circumference(){
    this.radius = radius;
  }
  get area(){
    return Math.PI*Math.pow(this.radius,2);
  }
  
}