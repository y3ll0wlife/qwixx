import React from 'react';
import { GameRow } from './GameRow';
import { PenaltyRow } from './PenaltyRow';
import { ScoreDisplay } from './ScoreDisplay';
import { Color } from '../../types/Color';
import { Cell } from '../../types/Cell';

interface GameBoardProps {
    redRow: Cell[];
    yellowRow: Cell[];
    greenRow: Cell[];
    blueRow: Cell[];
    scores: {
        red: number;
        yellow: number;
        green: number;
        blue: number;
        penalty: number;
    };
    onMove: (color: Color, number: number) => void;
    onPenalty: (event: React.MouseEvent<HTMLElement>) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({
    redRow,
    yellowRow,
    greenRow,
    blueRow,
    scores,
    onMove,
    onPenalty
}) => {
    return (
        <div className="game-board">
            <GameRow cells={redRow} color={Color.RED} onMove={onMove} lockNumber={12} />
            <GameRow cells={yellowRow} color={Color.YELLOW} onMove={onMove} lockNumber={12} />
            <GameRow cells={greenRow} color={Color.GREEN} onMove={onMove} lockNumber={2} />
            <GameRow cells={blueRow} color={Color.BLUE} onMove={onMove} lockNumber={2} />
            <PenaltyRow penaltyScore={scores.penalty} onPenalty={onPenalty} />
            <ScoreDisplay
                redScore={scores.red}
                yellowScore={scores.yellow}
                greenScore={scores.green}
                blueScore={scores.blue}
                penaltyScore={scores.penalty}
            />
        </div>
    );
};