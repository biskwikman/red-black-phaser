import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    // load progress bar info
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    // load assets needed in game
    this.load.spritesheet('player', 'assets/characters/main/main-char-sheet.png', {frameWidth: 32, frameHeight: 48});
    this.load.image('room', 'assets/environments/room.png');
    this.load.image('tiles', 'assets/environments/test/[Base]BaseChip_pipo.png');
    this.load.tilemapTiledJSON('map', 'assets/environments/test/test.json');

    // emit signals detailing assets loaded
    this.load.on('progress', function (value) {
      console.log(value);
    });
    this.load.on('fileprogress', function (file) {
      console.log(file.src);
    });
    this.load.on('complete', function () {
      console.log('complete');
    });

    this.load.on('progress', function (value) {
        console.log(value);
        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(250, 280, 300 * value, 30);
    });
  }

  create() {
    this.scene.start('Title');
  }
}