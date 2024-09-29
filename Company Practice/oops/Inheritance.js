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

const foot = new football('ashish');
foot.peoperties();
foot.req()