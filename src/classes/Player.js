import { PATH_HERO } from "../utils/constants.js"

class Player{
    constructor(canvasWidth, canvasHeight) {
        this.width = 100
        this.heigth = 100
        this.position = {
            x: canvasWidth / 2 - this.width / 2,
            y: canvasHeight - this.heigth - 25
        }

        this.image = this.getImage(PATH_HERO)
    }

    getImage(path) {
        const image = new Image()
        image.src = path
        return image
    }

    moveLeft() {
        this.position.x -= 6
    }
    
    moveRigth() {
        this.position.x += 6
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
}


export default Player
