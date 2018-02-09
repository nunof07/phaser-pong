import { Unit } from '@main/core/collection/Unit';
import { Factory } from '@main/core/Factory';
import { PongSoundFx } from '@main/entities/audio/PongSoundFx';
import { SoundFx } from '@main/entities/audio/SoundFx';
import { Ball } from '@main/entities/ball/Ball';
import { BallPaddleCollision } from '@main/entities/physics/BallPaddleCollision';
import { Referee } from '@main/entities/referee/Referee';
import * as Phaser from 'phaser-ce';

/**
 * Create sound effects.
 */
export class PongSoundFxFactory implements Factory<SoundFx> {
    private readonly sound: Unit<Phaser.SoundManager>;
    private readonly ball: Unit<Ball>;
    private readonly ballPaddleCollsion: Unit<BallPaddleCollision>;
    private readonly referee: Unit<Referee>;

    constructor(
        sound: Unit<Phaser.SoundManager>,
        ball: Unit<Ball>,
        ballPaddleCollsion: Unit<BallPaddleCollision>,
        referee: Unit<Referee>,
    ) {
        this.sound = sound;
        this.ball = ball;
        this.ballPaddleCollsion = ballPaddleCollsion;
        this.referee = referee;
    }

    public create(): SoundFx {
        const fx: PongSoundFx = new PongSoundFx(this.sound.value());

        this.ballPaddleCollsion.value().collided().add((): void => {
            fx.playHit();
        });
        this.referee.value().scored().add((): void => {
            fx.playScore();
        });
        this.ball.value().blocked().add((blocked: Phaser.Physics.Arcade.FaceChoices) => {
            if (blocked.up || blocked.down) {
                fx.playWall();
            }
        });

        return fx;
    }
}
