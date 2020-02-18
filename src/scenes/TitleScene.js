import 'phaser';

export default class TitleScene extends Phaser.Scene {
    constructor() {
      super('Title');
    }

    preload() {}

    create() {
        this.titleText = this.add.text(0, 0, 'Black/Red', { fontSize: '50px', fill: 'fff' });
        this.pressEnterText = this.add.text(400, 400, 'Press Enter', { fontSize: '20px', fill: 'white'});

        this.input.keyboard.on('keyup_ENTER', this.changeScene, this);
    }

    changeScene() {
        this.scene.start('Game');
    }
}