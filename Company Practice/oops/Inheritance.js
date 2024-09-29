class player {
    constructor(game) {
        this.game = game;
    }
    peoperties() {
        console.log(`${this.game} is good boy`)
    }
}
class football extends player {
    req() {
        console.log('they need a ball')
    }
}
class cricket extends player {
    team() {
        console.log('this is a cricket team')
    }
}

const foot = new football('ashish');
const cric = new cricket('cricket')
foot.peoperties();
foot.req()
cric.peoperties()
cric.team();