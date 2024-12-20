import Enemy from "./classes/enemy.js"
import Player from "./classes/Player.js"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

ctx.imageSmoothingEnabled = false

const randomNum = () => {
    return Math.floor(Math.random() * (2 - 2) + 2);
}

const player = new Player(canvas.width, canvas.height)
const playerShot = []

const enemy = new Enemy(2, canvas.width)
const enemyList = []

const keys = {
    left: false,
    rigth: false,
    shot: {
        pressed: false,
        released: true
    }
}

let formation

const drawEnemy = (enemyList) => {
    if (enemyList.length > 0) {
        enemy.draw(formation, ctx)
    }
}

const drawShot = () => {
    playerShot.forEach((shot) => {
        shot.draw(ctx)
        shot.update()
    })
}

const clearShot = () => {
    playerShot.forEach((shot, index) => {
        if (shot.position.y <= 0) {
            playerShot.splice(index, 1)
        }
    })
}

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (enemyList.length === 0) {
        formation = randomNum()
        if (formation === 1) enemyList.push(1, 1, 1, 1)
        else if (formation === 2 || formation == 3) enemyList.push(1, 1, 1, 1, 1)
    }

    if (enemy.line1Height <= canvas.height / 2 - 120) {enemy.moveDown()}

    // Movimentação da formação 1
    if (formation === 1) {
        if (enemy.line1Height === Math.ceil(canvas.height / 2 - 120) && enemy.formation1Line1 <= canvas.width - 400) {
            enemy.moveRightLine1()
            if (enemy.formation1Line1 == (canvas.width - 400) + 1) {enemy.line1Height -=1}
        }

        if (enemy.line1Height === Math.ceil(canvas.height / 2 - 120) + 1 && enemy.formation1Line1 > 25) {
            enemy.moveLeftLine1()
            if (enemy.formation1Line1 == 25) {enemy.line1Height -= 1}
        }

        // separação
        if (enemy.line2Height === Math.ceil(canvas.height / 2 - 290) && enemy.formation1Line2 > 25) {
            enemy.moveLeftLine2()
            if (enemy.formation1Line2 == 25) {enemy.line2Height -=1}
        }

        if (enemy.line2Height === Math.ceil(canvas.height / 2 - 290) + 1 && enemy.formation1Line2 <= canvas.width - 400) {
            enemy.moveRightLine2()
            if (enemy.formation1Line1 == 25) {enemy.line2Height -= 1}
        }
    }
    // Movimentação da formação 2
    if (formation === 2) {
        if (enemy.line1Height === Math.ceil(canvas.height / 2 - 120) && enemy.formation2Line1 <= canvas.width - 800) {
            enemy.moveRightLine1()
            if (enemy.formation2Line1 == (canvas.width - 800) + 1) {enemy.line1Height -=1}
        }

        if (enemy.line1Height === Math.ceil(canvas.height / 2 - 120) + 1 && enemy.formation2Line1 > 25) {
            enemy.moveLeftLine1()
            if (enemy.formation2Line1 == 25) {enemy.line1Height -= 1}
        }

        if (enemy.line2Height === Math.ceil(canvas.height / 2 - 290) && enemy.formation1Line2 > 25) {
            enemy.moveLeftLine2()
            if (enemy.formation2Line2 == 25) {enemy.line2Height -=1}
        }

        if (enemy.line2Height === Math.ceil(canvas.height / 2 - 290) + 1 && enemy.formation2Line2 <= canvas.width - 400) {
            enemy.moveRightLine2()
            if (enemy.formation2Line1 == 25) {enemy.line2Height -= 1}
        }
    }


    drawShot()
    clearShot()

    if (keys.shot.pressed && keys.shot.released) {
        player.shot(playerShot)
        keys.shot.released = false
    }

    if (keys.left && player.position.x >= 0) player.moveLeft()
        
    if (keys.rigth && player.position.x <= canvas.width - player.width) player.moveRigth()
        
    player.draw(ctx)
    drawEnemy(enemyList)
        
    requestAnimationFrame(gameLoop)
}
gameLoop()

addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase()
    
    if (key === "a") keys.left = true

    if (key === "d") keys.rigth = true

    if (key === "enter") keys.shot.pressed = true
})

addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase()
    
    if (key === "a") keys.left = false

    if (key === "d") keys.rigth = false

    if (key === "enter") {
        keys.shot.pressed = false
        keys.shot.released = true
    }
})
