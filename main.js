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
        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        var that = this;
        spaceKey.onDown.add((function (){ mainState.circle.body.position.x++; }), this);
    },
};

game.state.add('main', mainState);
game.state.start('main');