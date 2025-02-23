import { Notifications } from "@mantine/notifications";
import { useGameSocket } from "../hooks/useGameHook";
import { LoginForm } from "./Auth/LoginForm";
import { GameBoard } from "./GameBoard/GameBoard";
import { GameEndScreen } from "./GameEnd/GameEndScreen";

export function Qwixx() {
    const {
        connected,
        room,
        error,
        gameCreatorId,
        hasEnded,
        endedTableData,
        gameState,
        createGame,
        joinGame,
        leaveGame,
        sendMove,
        sendPenalty,
        endGame,
        rematch
    } = useGameSocket();

    if (!connected) {
        return <div>Loading...</div>;
    }

    if (hasEnded && endedTableData) {
        return (
            <GameEndScreen
                tableData={endedTableData}
                onRematch={rematch}
                onLeave={leaveGame}
                isCreator={localStorage.getItem("userId") === gameCreatorId}
            />
        );
    }

    if (room === null) {
        return (
            <LoginForm
                onCreateGame={createGame}
                onJoinGame={joinGame}
                error={error}
            />
        );
    }

    return (
        <>
            <Notifications position="top-center" limit={1} />
            <h3>Code: {room.roomCode}</h3>
            <GameBoard
                redRow={gameState.redRow}
                yellowRow={gameState.yellowRow}
                greenRow={gameState.greenRow}
                blueRow={gameState.blueRow}
                scores={{
                    red: gameState.redScore,
                    yellow: gameState.yellowScore,
                    green: gameState.greenScore,
                    blue: gameState.blueScore,
                    penalty: gameState.penaltyScore
                }}
                onMove={sendMove}
                onPenalty={sendPenalty}
            />
            <div className="game-controls">
                {localStorage.getItem("userId") === gameCreatorId && (
                    <button onClick={endGame} style={{ border: "0px" }}>
                        End game
                    </button>
                )}
                <button onClick={leaveGame} style={{ border: "0px", margin: "10px" }}>
                    Leave game
                </button>
            </div>
        </>
    );
}