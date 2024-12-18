import Player from "./classes/Player.js"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

const player = new Player(canvas.width, canvas.height)

const keys = {
    left: false,
    rigth: false
}

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    if (keys.left && player.position.x >= 0) player.moveLeft()
    
    if (keys.rigth && player.position.x <= canvas.width - player.width) player.moveRigth()

    player.draw(ctx)

    requestAnimationFrame(gameLoop)
}

gameLoop()

addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase()
    
    if (key === "a") keys.left = true

    if (key === "d") keys.rigth = true
})

addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase()
    
    if (key === "a") keys.left = false

    if (key === "d") keys.rigth = false
})
