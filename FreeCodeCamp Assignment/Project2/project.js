const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Player{
    constructor(){


        this.velocity = {
            x:0,
            y:0
        }
        // this.image 
        const image = new Image()
        image.src='./img/spaceship.png'
        image.onload = () => {
        this.image = image
        this.width = image.width * 0.15
        this.height= image.height * 0.15
        this.position = {
            x: canvas.width / 2 - this.width / 2,
            y: canvas.height - this.height - 20
        }
        }
    }
        draw() {
            // c.fillStyle= 'red'
            // c.fillRect(this.position.x, this.position.y, this.width, this.height)
            if(this.image)
            c.drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height
            )
        }
    }


const player = new Player()
player.draw()

function animate() {
    requestAnimationFrame(animate)
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()

}

animate()

addEventListener('keydown', ({key}) => {
    switch(key){
    case 'a':
        console.log('left')
        break
    case 's':
        console.log('down')
        break
    case 'd':
        console.log('right')
        break
    case 'w':
        console.log('up')
        break
    case ' ':
        console.log('space')
        break
    }
})