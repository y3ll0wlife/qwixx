import React from 'react';
import { PENALTY_ROW } from '../../constants';

interface PenaltyRowProps {
    penaltyScore: number;
    onPenalty: (event: React.MouseEvent<HTMLElement>) => void;
}

export const PenaltyRow: React.FC<PenaltyRowProps> = ({ penaltyScore, onPenalty }) => {
    return (
        <div className="penalty-row">
            {PENALTY_ROW.map((penalty, i) => {
                const className = (i + 1) < (penaltyScore / 4) ? "penalty-btn-clicked" : "penalty-btn";
                return (
                    <button
                        onClick={onPenalty}
                        className={className}
                        key={i}
                    >
                        {penalty}
                    </button>
                );
            })}
        </div>
    );
};