import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
  }

  create() {
    const room = this.add.image(600, 600, 'room');
    room.setScale(2, 2);

    this.player = this.physics.add.sprite(100, 100, 'player', 1)
    this.player.setCollideWorldBounds(true);
  }
}