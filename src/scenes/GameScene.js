import 'phaser';
import Player from '../prefab/Player.js';

console.log(this);
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {

  }

  update() {

  }

  create() {

    const map = this.make.tilemap({ key: 'map'});
    const tiles = map.addTilesetImage('[Base]BaseChip_pipo', 'tiles');

    const grass = map.createStaticLayer('grass', tiles, 0, 0);
    const obstacles = map.createStaticLayer('walls', tiles, 0, 0);
    obstacles.setCollisionByExclusion([-1]);

    this.player = new Player(this, 100, 300, 'player', 0);

    this.physics.add.collider(this.player, obstacles);

    this.cursors = this.input.keyboard.createCursorKeys();
  }
}