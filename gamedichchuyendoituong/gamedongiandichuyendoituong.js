
function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' " height="'+ this.size + '"' +
            ' " src="' + this.image +'"' +
            ' " style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 10;
        console.log('ok: ' + this.left);
    }
    this.moveDown =function () {
        this.top += 10;
        console.log('ok: ' + this.top);
    }
    this.moveLeft = function () {
        this.left -= 10;
        console.log('ok: ' + this.left)
    }
    this.moveUp = function () {
        this.top -=10;
        console.log('ok: ' + this.top)
    }

}
let speed = Math.floor((Math.random()*20) + 3);
let hero = new Hero('pikachu.png', 0, 0, 200,speed);

function start(){
    if((hero.left < window.innerWidth - hero.size) && (hero.top <= 0)){
        hero.moveRight();
    } else if ((hero.left>= window.innerWidth - hero.size) && (hero.top < window.innerHeight - hero.size)){
        hero.moveDown()
    } else if ((hero.top >= window.innerHeight - hero.size) && (hero.left >= 0)){
        hero.moveLeft();
    }else  if (hero.top >= 0 && hero.left<=0) {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
}

start();