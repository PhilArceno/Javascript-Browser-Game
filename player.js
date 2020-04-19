class Player {
    constructor (root) {
        this.x = GAME_WIDTH / 2 - PLAYER_WIDTH / 2// because player spawns in the middle, this is the space between the player and the game's frame
        this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10
        this.health = 150
        this.domElement = document.createElement('img')
        this.domElement.src = 'images/player.gif'
        this.domElement.style.position = 'absolute'
        this.domElement.style.left = this.x + "px"
        this.domElement.style.top = this.y + "px"
        this.domElement.style.zIndex = 10

        this.hpBarContainer = document.createElement('div')
        this.hpBarContainer.style.backgroundColor = 'red'
        this.hpBarContainer.style.position = 'absolute'
        this.hpBarContainer.style.left = GAME_WIDTH - this.health + 'px'
        this.hpBarContainer.style.top = 16 + 'px'
        this.hpBarContainer.style.width = this.health
        this.hpBarContainer.style.border = "1px solid white"
        this.hpBarContainer.style.borderRadius = 5 + 'px'

        this.hpBar = document.createElement('div')
        this.hpBar.style.backgroundColor = 'lightgreen'
        this.hpBar.style.width = this.health
        this.hpBar.style.height = 20 + 'px'
        this.hpBar.style.borderRadius = 3.5 + 'px'

        this.hpText = document.createElement('div')
        this.hpText.style.position = 'absolute'
        this.hpText.innerText = 'HP: '
        this.hpText.style.color = 'white'
        this.hpText.style.left = -30 + 'px'
        this.hpText.style.top = 2 + 'px'

        this.hpBarContainer.appendChild(this.hpBar)
        this.hpBarContainer.appendChild(this.hpText)
        root.appendChild(this.hpBarContainer)
        root.appendChild(this.domElement)
    }
    // moveLeft () {
    //     if (this.x > 0) {
    //         this.x = this.x - PLAYER_WIDTH
    //     }
    // this.domElement.style.left = this.x + "px"
    // }
    // moveRight () {
    //     if (this.x + PLAYER_WIDTH < GAME_WIDTH) {
    //         this.x = this.x + PLAYER_WIDTH
    //     }
    //     this.domElement.style.left = this.x + "px"
    // }
    // moveUp () {
    //     if (this.y > 0 + PLAYER_HEIGHT) {
    //         this.y = this.y - PLAYER_HEIGHT
    //     }
    //     this.domElement.style.top = this.y + "px"
    // }
    // moveDown () {
    //     if (this.y + PLAYER_HEIGHT < GAME_HEIGHT - PLAYER_HEIGHT ) {
    //         this.y = this.y + PLAYER_HEIGHT
    //     }
    //     this.domElement.style.top = this.y + "px"
    // }
    movePlayer (xCur, yCur) {

        this.domElement.style.transition = 'transform 0.25s'

        if (
            xCur > 0 + (PLAYER_WIDTH / 1.9) &&
            xCur + (PLAYER_WIDTH / 2.6) < GAME_WIDTH) {
            this.x = xCur - (PLAYER_WIDTH / 2) //center to cursor 
            this.domElement.style.left = this.x + 'px'
                }

        if (
            yCur > 0 + (PLAYER_HEIGHT / 1.7) &&
            yCur + (PLAYER_HEIGHT / 2) < GAME_HEIGHT) {
                this.y = yCur - (PLAYER_HEIGHT / 2) // center to cursor
                this.domElement.style.top = this.y + 'px'
    }

    if (xCur > (GAME_WIDTH / 2) + (PLAYER_WIDTH / 2)) {
        this.domElement.style.transform = 'rotate(10deg)'
    } else if (xCur < (GAME_WIDTH / 2) - (PLAYER_WIDTH / 2)) {
        this.domElement.style.transform = 'rotate(-10deg)'
    } else  this.domElement.style.transform = 'rotate(0deg)'
    }

}