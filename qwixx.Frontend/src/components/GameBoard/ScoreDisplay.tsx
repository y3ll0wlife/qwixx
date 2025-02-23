import React from 'react';

interface ScoreDisplayProps {
    redScore: number;
    yellowScore: number;
    greenScore: number;
    blueScore: number;
    penaltyScore: number;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
    redScore,
    yellowScore,
    greenScore,
    blueScore,
    penaltyScore
}) => {
    const totalScore = redScore + yellowScore + greenScore + blueScore - penaltyScore;

    return (
        <div className="score-display">
            <h3>
                <span className="red-score">{redScore}</span> +
                <span className="yellow-score"> {yellowScore}</span> +
                <span className="green-score"> {greenScore}</span> +
                <span className="blue-score"> {blueScore}</span> -
                <span className="penalty-score"> {penaltyScore}</span> = {totalScore}
            </h3>
        </div>
    );
};