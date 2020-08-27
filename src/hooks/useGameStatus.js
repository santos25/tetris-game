import { useState, useEffect, useCallback } from 'react'


export const useGameStatus = (rowsCleared) => {
    const [rows, setRows] = useState(0)
    const [score, setScore] = useState(0)
    const [level, setLevel] = useState(0)

    const linePoints = [40, 100, 300, 1200];

    const calculateScore = useCallback(() => {
        // console.log({rowsCleared});
        if (rowsCleared > 0) {
            // console.log({ score })
            setScore(prev => prev + linePoints[(rowsCleared / 2) - 1] * (level + 1))
            setRows(prev => prev + (rowsCleared / 2) )
        }
    }, [rowsCleared, linePoints, level])

    useEffect(() => {
        // console.log("UseGame Effect");
        calculateScore();
    }, [calculateScore, rowsCleared])

    return [rows, setRows, score, setScore, level, setLevel]
}