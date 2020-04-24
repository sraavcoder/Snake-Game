class Snake{
    constructor(){
      this.length = 1;
     this.body = [];
     this.body[0] = createVector(1,1);
     this.xdir = 0;
     this.ydir = 0;
    }

    gameOver(){
      var x = this.body[this.body.length - 1].x;
       var y = this.body[this.body.length - 1].y;
       if(x > w-1 || x<0 || y >h-1 || y <0){
          return true;
       }
       for(var i =0;i<this.body.length - 1;i++){
         let particle = this.body[i];
         if(particle.x == x && particle.y == y){
            return true;
         }
       }
       return false;
    }
    
    move(){
    var head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x = head.x + this.xdir;
    head.y = head.y + this.ydir;
    this.body.push(head);
      // this.body[0].x = this.body[0].x + this.xdir;
    //this.body[0].y = this.body[0].y + this.ydir;  
      
    }

    setDir(x,y){
      this.xdir = x;
      this.ydir = y;
    }
    grow(){
      var head = this.body[this.body.length - 1].copy();
     this.length++;
     this.body.push(head);
    }
    eat(F){
       var x = this.body[this.body.length - 1].x;
       var y = this.body[this.body.length - 1].y;
       if(x == F.x && y == F.y){
         this.grow();
        return true;
       }
    }

    display(){
       for(var i = 0; i< this.body.length; i++){
         fill("green");
        noStroke();
        rectMode(CENTER);
        rect(this.body[i].x,this.body[i].y,1,1);
       }
    }
}