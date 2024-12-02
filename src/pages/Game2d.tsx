import React, { useEffect } from "react";
import Phaser from "phaser";

const Game: React.FC = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    const game = new Phaser.Game(config);

    let player: Phaser.Physics.Arcade.Sprite;

    function preload(this: Phaser.Scene) {
      // Memuat gambar
      this.load.image("player", "/player.png");
      this.load.image("enemy", "/enemy.png");
    }

    function create(this: Phaser.Scene) {
      // Membuat objek player
      player = this.physics.add.sprite(400, 300, "player");
      player.setCollideWorldBounds(true); // Agar player tidak keluar dari layar

      // Membuat musuh
      let enemy = this.physics.add.sprite(100, 100, "enemy");
      enemy.setVelocity(100, 100);

      // Deteksi tabrakan
      this.physics.add.collider(player, enemy, hitEnemy, undefined, this);
    }

    function update(this: Phaser.Scene) {
      // Menggerakkan player menggunakan keyboard
      const cursors = this.input.keyboard?.createCursorKeys();

      if (cursors?.left.isDown) {
        player.x -= 5;
      } else if (cursors?.right.isDown) {
        player.x += 5;
      }

      if (cursors?.up.isDown) {
        player.y -= 5;
      } else if (cursors?.down.isDown) {
        player.y += 5;
      }
    }

    function hitEnemy() {
      console.log("Player hit an enemy!");
    }

    // Membersihkan game instance saat komponen di-unmount
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="game-container" className="w-full h-full bg-gray-800 flex justify-center items-center" />;
};

export default Game;
