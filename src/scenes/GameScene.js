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
    if (this.player.y < this.talker.y) {
      this.player.depth = 1;
    } else if (this.player.y > this.talker.y) {
      this.player.depth = 3;
    }
  }

  create() {

    const map = this.make.tilemap({ key: 'map'});
    const tiles = map.addTilesetImage('[Base]BaseChip_pipo', 'tiles');

    const grass = map.createStaticLayer('grass', tiles, 0, 0);
    const obstacles = map.createStaticLayer('walls', tiles, 0, 0);
    obstacles.setCollisionByExclusion([-1]);

    this.talker = this.physics.add.staticSprite(200, 150, 'talker');
    this.talker.body.setSize(32, 32);
    this.talker.body.setOffset(0, 16);
    this.talker.depth = 2;
    
    this.player = new Player(this, 100, 300, 'player', 0);
    this.player.depth = 2;

    this.physics.add.collider(this.player, [obstacles, this.talker]);

    console.log(this.player.depth, this.talker.depth);
  }
}