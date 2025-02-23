import React from 'react';
import { Table, TableData } from '@mantine/core';

interface GameEndScreenProps {
    tableData: TableData;
    onRematch: () => void;
    onLeave: () => void;
    isCreator: boolean;
}

export const GameEndScreen: React.FC<GameEndScreenProps> = ({
    tableData,
    onRematch,
    onLeave,
    isCreator
}) => {
    return (
        <>
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