import * as Phaser from 'phaser-ce';

/**
 * Get the arcade body in the sprite.
 * @param sprite Sprite.
 */
export function arcadeBody(sprite: Phaser.Sprite): Phaser.Physics.Arcade.Body {
    return <Phaser.Physics.Arcade.Body>sprite.body;
}
