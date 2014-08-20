var game = new Phaser.Game(600, 480, Phaser.AUTO, 'gameDiv');

var mainState = {

    preload: function() {
        game.stage.backgroundColor = '#ccaaaa';
        game.load.image('circle', 'assets/circle.png');
    },

    create: function() {
        game.world.setBounds(0, 0, 1920, 1920);
        var circle = this.game.add.sprite(64, 64, 'circle');
        var circle2 = this.game.add.sprite(30, 64, 'circle');
        var keyboard = this.game.input.keyboard;
        keyboard.addKey(Phaser.Keyboard.UP).onDown.add(   (function (){ circle.position.y-=25; }), this);
        keyboard.addKey(Phaser.Keyboard.DOWN).onDown.add( (function (){ circle.position.y+=25; }), this);
        keyboard.addKey(Phaser.Keyboard.LEFT).onDown.add( (function (){ circle.position.x-=25; }), this);
        keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.add((function (){ circle.position.x+=25; }), this);
    },

    update: function() {
        var that = this;
        kb = game.input.keyboard

        if (kb.isDown(87)) { // W
            game.camera.y += 10;
        }
        if (kb.isDown(83)) { // S
            game.camera.y -= 10;
        }
        if (kb.isDown(65)) { // A
            game.camera.x -= 10;
        }
        if (kb.isDown(68)) { // D
            game.camera.x += 10;
        }

    },

    render: function() {
        game.debug.cameraInfo(game.camera, 32, 32);
    }
};

game.state.add('main', mainState);
game.state.start('main');
