import { PATH_ENEMY } from "../utils/constants.js"
import Gunshot from "./Gunshot.js"  

class Enemy{
    constructor(velocity, lineWidht) {
        this.width = 100 * 0.8
        this.heigth = 100 * 0.8
        
        this.line1Height = -100
        this.line2Height = -270

        this.formation1Line1 = lineWidht / 2 - 200
        this.formation1Line2 = lineWidht / 2 - 200

        this.formation2Line1 = lineWidht / 2 - 400
        this.formation2Line2 = lineWidht / 2 - 220

        this.formation3Line1 = lineWidht / 2 - 220
        this.formation3Line2 = lineWidht / 2 - 400

        this.velocity = velocity
        
        this.image = this.getImage(PATH_ENEMY)
    }

    getImage(path) {
        const image = new Image()
        image.src = path
        return image
    }

    moveLeftLine1() {
        this.formation1Line1 -= this.velocity
        this.formation2Line1 -= this.velocity
        this.formation3Line1 -= this.velocity
    }
    
    moveLeftLine2() {
        this.formation1Line2 -= this.velocity
        this.formation2Line2 -= this.velocity
        this.formation3Line2 -= this.velocity
    }

    moveRightLine1(slow) {
        this.formation1Line1 += this.velocity
        this.formation2Line1 += this.velocity 
        this.formation3Line1 += this.velocity
    }

    moveRightLine2() {
        this.formation1Line2 += this.velocity
        this.formation2Line2 += this.velocity
        this.formation3Line2 += this.velocity 
    }

    moveDown() {
        this.line1Height += this.velocity
        this.line2Height += this.velocity
    }
    
    draw(formation, ctx) {

        if (formation === 1) { 

            // Linha 1
            ctx.drawImage(this.image,
                this.formation1Line1,
                this.line1Height,
                this.width,
                this.heigth)
                
            ctx.drawImage(this.image,
                this.formation1Line1 + 300,
                this.line1Height,
                this.width,
                this.heigth)
                
            // Linha 2
            ctx.drawImage(this.image,
                this.formation1Line2,
                this.line2Height,
                this.width,
                this.heigth)

            ctx.drawImage(this.image,
                this.formation1Line2 + 300,
                this.line2Height,
                this.width,
                this.heigth)

        }
            
        if (formation === 2) {
    
            // Linha 1
            ctx.drawImage(this.image,
                this.formation2Line1,
                this.line1Height,
                this.width,
                this.heigth)

            ctx.drawImage(this.image,
                this.formation2Line1 + 350,
                this.line1Height,
                this.width,
                this.heigth)

            ctx.drawImage(this.image,
                this.formation2Line1 + 700,
                this.line1Height,
                this.width,
                this.heigth)

            // Linha 2
            ctx.drawImage(this.image,
                this.formation2Line2,
                this.line2Height,
                this.width,
                this.heigth)

            ctx.drawImage(this.image,
                this.formation2Line2 + 350,
                this.line2Height,
                this.width,
                this.heigth)
        }

        if (formation === 3) {
    
            // Linha 1
            
            ctx.drawImage(this.image,
                this.formation3Line1,
                this.line1Height,
                this.width,
                this.heigth)

            ctx.drawImage(this.image,
                this.formation3Line1 + 350,
                this.line1Height,
                this.width,
                this.heigth)

            // Linha 2
            ctx.drawImage(this.image,
                this.formation3Line2,
                this.line2Height,
                this.width,
                this.heigth)

            ctx.drawImage(this.image,
                this.formation3Line2 + 350,
                this.line2Height,
                this.width,
                this.heigth)

            ctx.drawImage(this.image,
                this.formation3Line2 + 700,
                this.line2Height,
                this.width,
                this.heigth)
        }
    }

    shot(playerShot) {
        const s = new Gunshot({
            x: (this.position.x + this.width / 2) + 7,
            y: this.position.y - 5
        }, 8)

        playerShot.push(s)
    }
}


export default Enemy
