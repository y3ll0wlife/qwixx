import React from 'react';
import { Cell } from '../../types/Cell';
import { Color } from '../../types/Color';
import { getClassName } from '../../utils/ClassNames';

interface GameRowProps {
    cells: Cell[];
    color: Color;
    onMove: (color: Color, number: number) => void;
    lockNumber?: number;
}

export const GameRow: React.FC<GameRowProps> = ({ cells, color, onMove, lockNumber }) => {
    return (
        <div className="game-row">
            {cells.map((cell, i) => {
                const showText = cell.number === lockNumber ? `${cell.number} + Lock` : cell.number;
                const className = getClassName(color, cell);
                return (
                    <button
                        disabled={className.includes("disable")}
                        className={className}
                        onClick={() => onMove(color, cell.number)}
                        key={i}
                    >
                        {showText}
                    </button>
                );
            })}
        </div>
    );
};