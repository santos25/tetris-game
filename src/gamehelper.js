const HEIGHT = 20;
export const WIDTH = 12;

export const createStage = () => {

    const stage = Array.from(Array(HEIGHT), () => Array(WIDTH).fill([0, 'clear']));
    return stage
}


export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {

    for (let row = 0; row < player.tetromino.length; row++) {
        for (let cell = 0; cell < player.tetromino[row].length; cell++) {
            // console.log({ row });
            // console.log({ cell });
            // console.log('pos y next', (row + player.pos.y + moveY));
            // console.log('pos x next ', (cell + player.pos.x + moveX));


            // console.log(stage[player.pos.y][cell + player.pos.x + moveX]);
            // console.log(stage[row + player.pos.y + moveY][cell + player.pos.x + moveX][1] !== 'clear');
            if (player.tetromino[row][cell] !== 0) {
                if (
                    //check we are inside of the height
                    !stage[row + player.pos.y + moveY] ||

                    //check we are inside of the width
                    !stage[row + player.pos.y + moveY][cell + player.pos.x + moveX] ||

                    //cheack the cell is not collised
                    stage[row + player.pos.y + moveY][cell + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true;
                }
            }
        }
    }
}

export const checkCollisionDown = (player, stage) => {

    for (let position = player.pos.y; position < stage.length; position++) {
        for (let row = 0; row < player.tetromino.length; row++) {
            for (let cell = 0; cell < player.tetromino[row].length; cell++) {
                // console.log(position);
                // console.log({ cell });
                // console.log('pos y next', (row + player.pos.y + moveY));
                // console.log('pos x next ', (cell + player.pos.x + moveX));

                if (player.tetromino[row][cell] !== 0) {
                    if (
                        //check we are inside of the height
                        !stage[row + position + 1] ||

                        //cheack the cell is not collised
                        stage[row + position + 1][cell + player.pos.x][1] !== 'clear'
                    ) {
                        console.log(position);
                        return position;
                    }
                }
            }
        }
    }


}