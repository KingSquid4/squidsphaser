/* global Phaser game_state game input*/
game_state.story = function() {};
game_state.story.prototype = {

    preload: function(){
    game.load.spritesheet('storyb', 'assets/storyb.png', 500, 500);
    
    },
    create: function(){
        game.add.sprite(0, 0, 'sky');
        game.add.sprite(30, 30, 'storyb');
    
        this.intro = game.add.sprite(20, game.world.height - 562, 'storyb');
        this.intro.animations.add('a', [1], 10, true);
        this.intro.animations.add('done', [2], 10, true);
        this.intro.body.setSize(400,400);
        
        this.Text = game.add.text(90, 420,'Press a to start', {
                fontSize: '32px',
                fill: '000'
        });
        
        this.cursors = game.input.keyboard.createCursorKeys();
        this.wasd = {
        a: input.keyboard.addKey(Phaser.Keyboard.W),

};
    },
    update: function(){
    // game.debug.body(this.intro);
    
    this.cursors = input.keyboard.createCursorKeys();
    
    this.intro.body.velocity.x = 0;
        
        if (this.cursors.a.isDown) {
            this.game.state.start('main');
            this.intro.animations.play('done');
        }
        
        if (this.this.scoreText >= 'score: 10') {
            this.game.state.start('story');
        }
    },
};


game.state.add('story', game_state.story);
// game.state.start('story');