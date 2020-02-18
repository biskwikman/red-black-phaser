import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
  }

  update(time, delta) {
    //balconyEntrance.body.debugBodyColor = zone.body.touching.none ? 0x00ffff : 0xffff00;

    const speed = 130;
    const speedDiag = speed * (1/1.44);
    this.player.body.setVelocity(0);
 
    // Horizontal movement
    if (this.cursors.left.isDown)
    {
        this.player.body.setVelocityX(-speed);
    }
    else if (this.cursors.right.isDown)
    {
        this.player.body.setVelocityX(speed);
    }

    // Vertical movement
    if (this.cursors.up.isDown)
    {
        this.player.body.setVelocityY(-speed);
    }
    else if (this.cursors.down.isDown)
    {
        this.player.body.setVelocityY(speed);
    }

    // Diagonal movement
    // Up and left
    if (this.cursors.left.isDown && this.cursors.up.isDown)
    {
        this.player.body.setVelocityX(-speedDiag);
        this.player.body.setVelocityY(-speedDiag);
    }

    // Up and right
    if (this.cursors.right.isDown && this.cursors.up.isDown)
    {
        this.player.body.setVelocityX(speedDiag);
        this.player.body.setVelocityY(-speedDiag);
    }

    // Down and right
    if (this.cursors.right.isDown && this.cursors.down.isDown)
    {
        this.player.body.setVelocityX(speedDiag);
        this.player.body.setVelocityY(speedDiag);
    }

    // Down and left
    if (this.cursors.left.isDown && this.cursors.down.isDown)
    {
        this.player.body.setVelocityX(-speedDiag);
        this.player.body.setVelocityY(speedDiag);
    }

    // Animations
    if (this.cursors.left.isDown)
    {
        this.player.anims.play('left', true)
    }
    else if (this.cursors.right.isDown)
    {
        this.player.anims.play('right', true)
    }
    else if (this.cursors.down.isDown)
    {
        this.player.anims.play('down', true)
    }
    else if (this.cursors.up.isDown)
    {
        this.player.anims.play('up', true)
    }
    else 
    {
        this.player.anims.stop()
    }
  }

  create() {
    const room = this.add.image(600, 600, 'room');
    room.setScale(2, 2);

    // Trying to get a zone to work for scene switching
    var balconyEntrance;
    balconyEntrance = this.add.zone(100, 100).setSize(200, 10).setVisible(true).setDepth(9999);
    this.physics.world.enable(balconyEntrance);
    balconyEntrance.body.setAllowGravity(false);
    balconyEntrance.body.moves = false;
    //this.physics.add.overlap(this.player, balconyEntrance, this.onBalconyEntrance, false, this)

    this.player = this.physics.add.sprite(100, 300, 'player', 0)
    this.player.setScale(2, 2);
    this.player.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', {frames: [3, 4]}),
      frameRate: 4,
      repeat: -1
    })
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', {frames: [5, 6]}),
      frameRate: 4,
      repeat: -1
    })
    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('player', {frames: [0, 1, 0, 2]}),
      frameRate: 4,
      repeat: -1
    })
    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('player', {frames: [7, 8, 7, 9]}),
      frameRate: 4,
      repeat: -1
    })
  }
}