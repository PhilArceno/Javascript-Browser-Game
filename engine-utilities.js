let nextEnemySpot = enemies => {
    let enemySpots = GAME_WIDTH / ENEMY_WIDTH
    let spotsTaken = [false, false, false, false, false]
    enemies.forEach(enemy => {
        spotsTaken[enemy.spot] = true
    })
    let candidate = undefined
    while (candidate === undefined || spotsTaken[candidate]) {
        candidate = Math.floor(Math.random() * enemySpots)
    }
    return candidate
}

let addBackground = root => {
    let background = document.createElement('img')
    background.src = 'images/background.gif'
    background.style.height = GAME_HEIGHT + 'px'
    background.style.width = GAME_WIDTH + 'px'
    root.appendChild(background)

    let whiteDiv = document.createElement('div')
    whiteDiv.style.position = 'absolute'
    whiteDiv.style.height = GAME_HEIGHT / 1.5 + 'px'
    whiteDiv.style.top = GAME_HEIGHT + 'px'
    whiteDiv.style.backgroundColor = 'white'
    whiteDiv.style.width = '95vw'
    whiteDiv.style.zIndex = 100
    root.appendChild(whiteDiv)
}