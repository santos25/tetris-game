import { useState, useCallback } from 'react'

import { TETROMINOS, randomTetromino } from '../tetrominos';

import { WIDTH, checkCollision } from '../gamehelper'

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: TETROMINOS[0].shape,
        collided: false
    })

    // console.log('render Player Hooks');

    const rotate = (tetromino, dir) => {
        //make rows to become columns
        // console.log(tetromino);
        const rotatedTetro = tetromino.map((_, index) =>
            tetromino.map(col => col[index]),
        );

        // console.log(rotatedTetro);

        if (dir > 0) return rotatedTetro.map(row => row.reverse());

        return rotatedTetro.reverse();
    }

    const rotatePlayer = (stage, dir) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player));
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);
        // console.log(clonedPlayer.tetromino);

        const pos = clonedPlayer.pos.x;
        let offset = 1;
        while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
            clonedPlayer.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > clonedPlayer.tetromino[0].length) {
                rotate(clonedPlayer.tetromino, -dir);
                clonedPlayer.pos.x = pos;
                return;
            }
        }

        setPlayer(clonedPlayer);
    }

    const updatePlayerPos = ({ x, y, collided }) => {
        // console.log('position ', player.pos.x);
        setPlayer(prev => ({
            ...prev,
            pos: { x: (player.pos.x + x), y: (prev.pos.y + y) },
            collided
        }));
    }

    const resetPlayer = useCallback(() => {
        // console.log("reset Player");
        setPlayer({
            pos: { x: WIDTH / 2 - 2, y: 0 },
            tetromino: randomTetromino().shape,
            collided: false
        })
    }, [])

    return [player, updatePlayerPos, resetPlayer, rotatePlayer]
}