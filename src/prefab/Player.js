import 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {   
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.body.setSize(32, 32);
        this.body.setOffset(0, 16);

        this.speed = 75;
        this.speedDiag = this.speed * (1/1.44);
        const { LEFT, RIGHT, UP, DOWN } = Phaser.Input.Keyboard.KeyCodes;
        this.keys = this.scene.input.keyboard.addKeys({
            left: LEFT,
            right: RIGHT,
            up: UP,
            down: DOWN,
        });
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);
        const fps = 4.5;
        const keys = this.keys;

        this.body.setVelocity(0);
    
        // Horizontal movement
        if (keys.left.isDown)
        {
            this.body.setVelocityX(-this.speed);
        }
        else if (keys.right.isDown)
        {
            this.body.setVelocityX(this.speed);
        }

        // Vertical movement
        if (keys.up.isDown)
        {
            this.body.setVelocityY(-this.speed);
        }
        else if (keys.down.isDown)
        {
            this.body.setVelocityY(this.speed);
        }

        // Diagonal movement
        // Up and left
        if (keys.left.isDown && keys.up.isDown)
        {
            this.body.setVelocityX(-this.speedDiag);
            this.body.setVelocityY(-this.speedDiag);
        }

        // Up and right
        if (keys.right.isDown && keys.up.isDown)
        {
            this.body.setVelocityX(this.speedDiag);
            this.body.setVelocityY(-this.speedDiag);
        }

        // Down and right
        if (keys.right.isDown && keys.down.isDown)
        {
            this.body.setVelocityX(this.speedDiag);
            this.body.setVelocityY(this.speedDiag);
        }

        // Down and left
        if (keys.left.isDown && keys.down.isDown)
        {
            this.body.setVelocityX(-this.speedDiag);
            this.body.setVelocityY(this.speedDiag);
        }

        // Animations
        if (keys.left.isDown)
        {
            this.anims.play('left', true)
        }
        else if (keys.right.isDown)
        {
            this.anims.play('right', true)
        }
        else if (keys.down.isDown)
        {
            this.anims.play('down', true)
        }
        else if (keys.up.isDown)
        {
            this.anims.play('up', true)
        }
        else 
        {
            this.anims.stop()
        }

        this.scene.anims.create({
            key: 'left',
            frames: this.scene.anims.generateFrameNumbers('player', {frames: [3, 4]}),
            frameRate: fps,
            repeat: -1
          })
          this.scene.anims.create({
            key: 'right',
            frames: this.scene.anims.generateFrameNumbers('player', {frames: [5, 6]}),
            frameRate: fps,
            repeat: -1
          })
          this.scene.anims.create({
            key: 'down',
            frames: this.scene.anims.generateFrameNumbers('player', {frames: [0, 1, 0, 2]}),
            frameRate: fps,
            repeat: -1
          })
          this.scene.anims.create({
            key: 'up',
            frames: this.scene.anims.generateFrameNumbers('player', {frames: [7, 8, 7, 9]}),
            frameRate: fps,
            repeat: -1
          })
    }
}