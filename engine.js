class Engine {
    gameLoop = () => {
        if (this.lastFrame === undefined) {
            this.lastFrame = Date.now()
            this.initTime = Date.now()
        }
        let timeDiff = Date.now() - this.lastFrame
        this.lastFrame = Date.now()
        this.enemies.forEach(enemy => {
            enemy.update(timeDiff, this.speedModifier)
        })
        this.enemies = this.enemies.filter(enemy => {
            return !enemy.destroyed
        })
        while (this.enemies.length < MAX_ENEMIES) {
            let spot = nextEnemySpot(this.enemies)
            this.enemies.push(new Enemy(this.root, spot, this.speedModifier))
        }
        if (this.isPlayerDead()) {
            document.getElementById('app').style.cursor = "default"
            window.removeEventListener("mousemove", keydownHandler)
            window.alert("Game over")
            return
        }
        this.score.update(this.lastFrame - this.initTime)
        setTimeout(this.gameLoop, 20)
    }
    isPlayerDead = () => {
        // for (let i = 0; i < this.enemies.length; i++) {
        //     let enemy = this.enemies[i]
        //     if (enemy.x === this.player.x &&
        //         enemy.y + ENEMY_HEIGHT >= this.player.y) {
        //             return true
        //         }
        //         return false
        // }

        if (this.player.invincible === true) {
            return false
        }

        if (this.enemies.some( // .some returns boolean
                (enemy) => (  enemy.width >= 100 &&
                    enemy.x + 15 < this.player.x + PLAYER_WIDTH - 15 &&
                    enemy.x + ENEMY_WIDTH - 25 > this.player.x + 15 &&
                    enemy.y + 20 < this.player.y + PLAYER_HEIGHT &&
                    enemy.y + ENEMY_HEIGHT - 20 > this.player.y + 10))) {
                        this.player.health = this.player.health - 50
                        this.player.hpBar.style.transition = '1s ease'
                        this.player.hpBar.style.width = this.player.health
                        this.player.domElement.style.mixBlendMode = 'color-dodge'
                        this.player.invincible = true

                        setTimeout(()=> {
                            this.player.domElement.style.mixBlendMode = ''
                            this.player.invincible = false
                        }, 2000)
                    }

        if (this.player.health <= 0) {
            return true
        }
            // return this.enemies.some( // .some returns boolean
            //     (enemy) => (  enemy.width >= 100 &&
            //     //the number values are so that we can make the hitbox smaller than the actual full image.
            //     //the brackets are because even though our player appears centered to the cursor, our x value isnt at the center.
            //         enemy.x + 15 < this.player.x + PLAYER_WIDTH - 15 && //player right, enemy left
            //         enemy.x + ENEMY_WIDTH - 25 > this.player.x + 15 && //player left, enemy right
            //         enemy.y + 20 < this.player.y + PLAYER_HEIGHT && // player down , enemy up
            //         enemy.y + ENEMY_HEIGHT - 20 > this.player.y + 10) //player up, enemy down
            // )
    }
    constructor(theRoot) {
        this.root = theRoot
        this.player = new Player(this.root)
        this.enemies = []
        this.score = new Text(this.root, 15, 10)
        this.speedModifier = 1
        let increaseSpeed = setInterval(()=> {
            if (this.speedModifier < 7) {
            Math.min(3, this.speedModifier = this.speedModifier * 1.20)
            } else clearInterval(increaseSpeed)
        }, 5000) // increase speedmodifier every 5 seconds to a maximum of 3.
        addBackground(this.root)
    }
}