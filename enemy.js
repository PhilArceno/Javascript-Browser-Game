class Enemy {
    update (timeDiff, speedModifier) {
        this.move = timeDiff * this.speed / 9
        this.domElement.style.top = this.y

        if (this.width < 100) {
        this.width += 1.5
        this.domElement.style.width = this.width
        this.y = this.y - this.move * 1.8
        }

        this.y = this.y + this.move

        if (this.direction === 0) { //move right
            this.x = this.x + this.move 
        } else { //move left
            this.x = this.x - this.move
        }

        if (this.x <= 0) { // equal to left game frame
            this.direction = 0
        } else if (this.x + ENEMY_WIDTH >= GAME_WIDTH) { //equal to right game frame
            this.direction = 1
        }

        this.domElement.style.left = this.x

        if (this.y > GAME_HEIGHT) {
            this.root.removeChild(this.domElement)
            this.destroyed = true
        }

        console.log(speedModifier)

        if (this.y > GAME_HEIGHT / 2 - ENEMY_HEIGHT) {
            if (speedModifier > 2.95) {
                this.width += 1.5
                this.domElement.style.width = this.width
            }
            if (speedModifier > 5) {
                this.width += 2.25
                this.domElement.style.width = this.width
            } else {
            this.width += 0.5
            this.domElement.style.width = this.width
            }
        }
    }
    constructor (theRoot, enemySpot, speedModifier) {
        this.root = theRoot
        this.spot = enemySpot
        this.x = enemySpot * ENEMY_WIDTH // which spot? 1, 2, 3, 4, 5?    
        this.y = GAME_HEIGHT / 2 - ENEMY_HEIGHT / 4
        this.destroyed = false
        this.domElement = document.createElement('img')
        this.width = 10
        this.domElement.style.width = this.width
        this.domElement.style.position = "absolute"
        this.domElement.src = "images/enemy.gif"
        this.domElement.style.left = this.x + 'px'
        this.domElement.style.top = this.y + 'px'
        this.domElement.style.zIndex = 5

        theRoot.appendChild(this.domElement)
        this.direction = Math.floor(Math.random() * 2)
        this.speed = (Math.random() / 2 + 0.25) * speedModifier
    }
}