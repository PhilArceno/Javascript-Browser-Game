let gameEngine = new Engine(document.getElementById("app"))
function keydownHandler(event) {
    var x = event.clientX
    var y = event.clientY
    document.getElementById('app').style.cursor = "none"
    gameEngine.player.movePlayer(x, y)
}
window.addEventListener("mousemove", keydownHandler)
gameEngine.gameLoop()

let addEnemies = setInterval(() => {
    if (MAX_ENEMIES < 5) {
           MAX_ENEMIES++ 
    } else clearInterval(addEnemies)
}, 10000)