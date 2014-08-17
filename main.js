var game = new Phaser.Game(400, 490, Phaser.AUTO, 'gameDiv');

var mainState = {

    preload: function() {
        game.stage.backgroundColor = '#ccaaaa';
        game.load.image('circle', 'assets/circle.png');
    },

    create: function() {
        this.circle = this.game.add.sprite(64, 64, 'circle');
    },

    update: function() {
        this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add({ circle.body.position.x++ }, this);
    },
};

game.state.add('main', mainState);
game.state.start('main');