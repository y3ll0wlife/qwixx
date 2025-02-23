import React from 'react';
import { Table, TableData } from '@mantine/core';
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

interface GameEndScreenProps {
    tableData: TableData;
    isCreator: boolean;
    isWinner: boolean;
    onRematch: () => void;
    onLeave: () => void;
}

export const GameEndScreen: React.FC<GameEndScreenProps> = ({
    tableData,
    onRematch,
    onLeave,
    isCreator,
    isWinner
}) => {
    const { width, height } = useWindowSize()

    return (
        <>
            {isWinner ? <Confetti
                gravity={0.1}
                numberOfPieces={250}
                width={width}
                height={height}
            /> : null}

            <Table data={tableData} mb="xl" />
            {isCreator && (
                <button onClick={onRematch} style={{ border: "0px", margin: "10px" }}>
                    Rematch
                </button>
            )}
            <button onClick={onLeave} style={{ border: "0px", margin: "10px" }}>
                Leave game
            </button>
        </>
    );
};