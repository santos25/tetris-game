import React, { useState } from 'react'
import { Howl, Howler } from 'howler';

//audios
import soundtetris from '../audio/soundtetris.mp3'
import soundmove from '../audio/move.mp3'
import soundgameover from '../audio/soundgameover.mp3'

//components
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'
import ActionButton from './ActionButton'

//helpers
import { createStage, checkCollision , checkCollisionDown} from '../gamehelper';

//custom hooks
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'
import { useInterval } from '../hooks/useInterval'
import { useGameStatus } from '../hooks/useGameStatus'

//styles
import {
    StyledTetris, StyledDisplay, StyledControl,
    StyledDown, StyledLeftRight, StyledWrapperActions,
    StyledStartButton, WrappedTetris,
    StyleTittle
} from './styles/StyledTetris'

let soundStartGame = new Howl({
    src: [soundtetris],
    loop: true,
});

var soundMove = new Howl({
    src: [soundmove],

});

var soundGameOver = new Howl({
    src: [soundgameover],
});

const Tetris = () => {
    const [droptime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer()
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer)
    const [rows, setRows, score, setScore, level, setLevel] = useGameStatus(rowsCleared);

    const startGame = () => {
        console.log("start game");
        playSound(soundtetris)
        setStage(createStage());
        resetPlayer()
        setGameOver(false);
        setDropTime(400)
        setLevel(0)
        setRows(0)
        setScore(0);
    }

    useInterval(() => {
        drop();
    }, droptime)

    const movePlayer = (dir) => {
        console.log(checkCollision(player, stage, { x: dir, y: 0 }));
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 })
        }
    }

    const moveUp = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(400 / (level + 1) + 200)
            }
        }
    }

    const move = ({ keyCode }) => {

        if (!gameOver) {
            if (keyCode === 37) {
                movePlayer(-1)
            } else if (keyCode === 39) {
                movePlayer(1)
            } else if (keyCode === 40) {
                dropPlayer()
            } else if (keyCode === 38) {
                playerRotate(stage, 1)
            }
        }
    }

    const drop = () => {

        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            setDropTime(400 / (level + 1) + 200);
        }

        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false })
        } else {
            if (player.pos.y < 1) {
                // console.log("Gam");
                soundStartGame.stop()
                soundGameOver.play()
                setGameOver(true);
                setDropTime(null)
            }
            updatePlayerPos({ x: 0, y: 0, collided: true })
        }
    }

    const dropFullDown = () => {

        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            setDropTime(1000 / (level + 1) + 200);
        }
        
       const positionDown =  checkCollisionDown(player, stage);
    //    console.log('Current pos ' ,  player.pos.y);
    //    console.log('next pos ' , positionDown);
    //    console.log( (positionDown - player.pos.y));
        updatePlayerPos({ x: 0, y: (positionDown - player.pos.y), collided: true })
        
    }


    const dropPlayer = () => {
        // setDropTime(null)
        drop();
    }

    const moveRight = () => {

        if (!gameOver) {
            soundMove.play();
            movePlayer(1)
        }
    }

    const moveLeft = () => {
        // console.log("move left");
        if (!gameOver) {
            soundMove.play();
            movePlayer(-1)
        }
    }

    // const moveDown = () => {
    //     dropPlayer()
    // }

    const moveUpClick = () => {
        playerRotate(stage, 1)
    }

    const playSound = (src) => {

        Howler.stop();
        soundStartGame.play();


    }

    return (
        <WrappedTetris rol="button" tabIndex="0" onKeyDown={(e) => move(e)}>
            <StyleTittle>
                <h1>TETRIS </h1>
            </StyleTittle>
            <StyledTetris>
                <StyledDisplay >
                    <Stage stage={stage} />
                    <aside>
                        {gameOver ?
                            (<div>
                                <Display gameover={gameOver} text="Juego Terminado" />
                                <Display text={`Puntuación : ${score}`} />
                                <Display text={`Total Filas : ${rows}`} />
                                <Display text={`Nivel : ${level}`} />
                            </div>)
                            : (
                                <div>
                                    <Display text={`Puntuación : ${score}`} />
                                    <Display text={`Total Filas : ${rows}`} />
                                    <Display text={`Nivel : ${level}`} />
                                </div>
                            )
                        }
                    </aside>
                </StyledDisplay>
                <StyledWrapperActions>
                    <StyledControl>
                        <StyledLeftRight>
                            <ActionButton move={moveLeft}>
                                <i className="fas fa-arrow-left"></i>
                            </ActionButton>
                            <ActionButton move={moveRight}>
                                <i className="fas fa-arrow-right"></i>
                            </ActionButton>
                        </StyledLeftRight>
                        <StyledDown>
                            <ActionButton move={dropFullDown}>
                                <i className="fas fa-arrow-down"></i>
                            </ActionButton>
                            <ActionButton move={moveUpClick}>
                                <i className="fas fa-sync-alt"></i>
                            </ActionButton>
                        </StyledDown>
                    </StyledControl>
                    <StyledStartButton>
                        <StartButton startGame={startGame} >
                            <i className="far fa-play-circle"></i>
                        </StartButton>
                    </StyledStartButton>
                </StyledWrapperActions>
            </StyledTetris>
        </WrappedTetris>
    )
}

export default Tetris
