class Player{
    constructor(canvasWidth, canvasHeight) {
        this.width = 100
        this.heigth = 100
        this.position = {
            x: canvasWidth / 2 - this.width / 2,
            y: canvasHeight - this.heigth - 25
        }
    }

    moveLeft() {
        this.position.x -= 6
    }
    
    moveRigth() {
        this.position.x += 6
    }

    draw(ctx) {
        ctx.fillStyle = "green"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.heigth)
    }
}


export default Player
