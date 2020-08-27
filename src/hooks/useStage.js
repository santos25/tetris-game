import { useState, useEffect } from 'react'

import { createStage } from '../gamehelper';

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage())
    const [rowsCleared, setRowsCleared] = useState(0);

    useEffect(() => {
        setRowsCleared(0);
        //first flush the stage
        // console.log("Effect Stage", player);
        const sweepRows = newStage =>
            newStage.reduce((acum, row) => {
                if (row.findIndex(cell => cell[0] === 0) === -1) {
                    setRowsCleared(prev => prev +1);
                    acum.unshift(new Array(newStage[0].length).fill([0, 'clear']))
                    return acum;
                }

                acum.push(row);
                return acum;
            }, []);



        const updateStage = (prev) => {
            const newStage = prev.map((row, y) => row.map((cell, x) => cell[1] === 'clear' ? [0, 'clear'] : cell));

            //draw the tretromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        // console.log('y', player.pos.y);
                        // console.log('x' , player.pos.x);
                        // console.log('xx' , player.pos.x + x);
                        newStage[y + player.pos.y][x + player.pos.x] = [value, `${player.collided ? 'merged' : 'clear'}`]
                    }

                })
            })

            if (player.collided) {
                resetPlayer()
                // console.log('Collided');
                return sweepRows(newStage);
            }

            return newStage;
        }

        setStage(prev => updateStage(prev))
    }, [player, resetPlayer])

    return [stage, setStage, rowsCleared];
}