var game = new Phaser.Game(600, 480, Phaser.AUTO, 'gameDiv');

var mainState = {

    preload: function() {
        game.stage.backgroundColor = '#ccaaaa';
        game.load.image('circle', 'assets/circle.png');
    },

    create: function() {
        this.circle = this.game.add.sprite(64, 64, 'circle');
        this.game.input.keyboard.addKey(Phaser.Keyboard.UP).onDown.add((function (){ mainState.circle.position.y-=25; }), this);
        this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN).onDown.add((function (){ mainState.circle.position.y+=25; }), this);
        this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT).onDown.add((function (){ mainState.circle.position.x-=25; }), this);
        this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.add((function (){ mainState.circle.position.x+=25; }), this);
    },

    update: function() {
        var that = this;
    },
};

game.state.add('main', mainState);
game.state.start('main');
