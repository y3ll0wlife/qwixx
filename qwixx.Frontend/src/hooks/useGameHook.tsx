import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { ServerToClientEvents } from '../types/receivedEvents/ServerToClientEvents';
import { ClientToServerEvents } from '../types/sentEvents/ClientToServerEvents';
import { Room } from '../types/Room';
import { notifications } from '@mantine/notifications';
import { TableData } from '@mantine/core';
import { Color } from '../types/Color';
import { AUTOCLOSE_NOTIFICATION, INITIAL_GAME_STATE } from '../constants';
import { colorFromValue } from '../utils/Color';
import { GameState } from '../types/GameState';


interface UseGameSocket {
    connected: boolean;
    room: Room | null;
    error: string | null;
    gameCreatorId: string | null;
    hasEnded: boolean;
    endedTableData: TableData | null;
    gameState: GameState;
    createGame: (username: string) => void;
    joinGame: (username: string, code: string) => void;
    leaveGame: () => void;
    sendMove: (colorValue: Color, number: number) => void;
    sendPenalty: (event: React.MouseEvent<HTMLElement>) => void;
    endGame: () => void;
    rematch: () => void;
}


export const useGameSocket = (): UseGameSocket => {
    const onceRef = useRef(false);
    const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents> | null>(null);
    const [connected, setConnected] = useState(false);
    const [room, setRoom] = useState<Room | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [gameCreatorId, setGameCreatorId] = useState<string | null>(null);
    const [hasEnded, setHasEnded] = useState(false);
    const [endedTableData, setEndedTableData] = useState<TableData | null>(null);
    const [gameState, setGameState] = useState<GameState>(INITIAL_GAME_STATE);

    const soundEffects = {
        select: new Audio("./assets/QwixxSelect.wav")
    }

    useEffect(() => {
        if (onceRef.current) return;
        onceRef.current = true;

        const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(import.meta.env.VITE_GATEWAY_URL);
        setSocket(socket);

        socket.onAnyOutgoing((eventName, ...args) => {
            console.log(`%c[${eventName}]%c ~> ${JSON.stringify(args)}`, "color:#25c2a0;font-weight:bold", "color:white;font-weight:normal");
        });

        socket.onAny((eventName, ...args) => {
            console.log(`%c[${eventName}]%c <~ ${JSON.stringify(args)}`, "color:#78dce8;font-weight:bold", "color:white;font-weight:normal");
        });

        socket.on("connect", () => {
            setConnected(true);
            const token = localStorage.getItem("token");
            if (token) {
                socket.emit("reconnect", { token });
            }
        });

        socket.on("rematch", () => {
            setHasEnded(false);
            setGameState(INITIAL_GAME_STATE);
        });

        socket.on("end_game", (msg) => {
            setHasEnded(true);
            notifications.cleanQueue();
            notifications.clean();

            const body = msg.result.scoreboard.map((board) => {
                let placementText = board.placement.toString();
                if (board.placement === 1) placementText = "🥇";
                else if (board.placement === 2) placementText = "🥈";
                else if (board.placement === 3) placementText = "🥉";

                return [
                    placementText,
                    board.username,
                    board.totalPoints,
                    board.redPoints,
                    board.yellowPoints,
                    board.greenPoints,
                    board.bluePoints,
                    board.penalties
                ];
            });

            setEndedTableData({
                head: ["Placement", "Username", "Points", "Red", "Yellow", "Green", "Blue", "Penalties"],
                body
            });
        });

        socket.on("move", (msg) => {
            if (localStorage.getItem("userId") !== msg.user.id) {
                if (msg.updatedCell.clicked) {
                    notifications.show({
                        title: msg.user.username,
                        message: `🔥 Picked number ${msg.updatedCell.number} and now has ${msg.points} points in that row`,
                        color: msg.color.toLowerCase(),
                        autoClose: AUTOCLOSE_NOTIFICATION,
                    });
                    soundEffects.select.play();
                }
                return;
            }

            setGameState(prev => ({
                ...prev,
                [msg.color.toLowerCase() + 'Row']: msg.gameRow,
                [msg.color.toLowerCase() + 'Score']: msg.points
            }));
        });

        socket.on("penalty", (msg) => {
            if (localStorage.getItem("userId") !== msg.user.id) {
                notifications.show({
                    title: msg.user.username,
                    message: `⚠️ Took a penalty ${msg.points / 5}/4`,
                    color: "violet",
                    autoClose: AUTOCLOSE_NOTIFICATION,
                });
                return;
            }
            setGameState(prev => ({ ...prev, penaltyScore: msg.points }));
        });

        socket.on("create_room", (msg) => {
            setRoom(msg);
            localStorage.setItem("token", msg.token);
            localStorage.setItem("userId", msg.userId);
            setGameCreatorId(msg.roomCreatorId);
        });

        socket.on("join_room", (msg) => {
            setRoom(msg);
            localStorage.setItem("token", msg.token);
            localStorage.setItem("userId", msg.userId);
            setGameCreatorId(msg.roomCreatorId);
        });

        socket.on("clear_token", () => {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            setGameCreatorId(null);
            setRoom(null);
            setGameState(INITIAL_GAME_STATE);
        });

        socket.on("join_room_error", ({ message }) => {
            setError(message);
        });

        socket.on("restore_board", (msg) => {
            setGameCreatorId(msg.creatorUserId);
            if (localStorage.getItem("userId") !== msg.user.id) {
                notifications.show({
                    title: msg.user.username,
                    message: `🎉 Has reconnected`,
                    color: "violet",
                    autoClose: AUTOCLOSE_NOTIFICATION,
                });
                return;
            }

            setGameState({
                redRow: msg.redRow,
                yellowRow: msg.yellowRow,
                greenRow: msg.greenRow,
                blueRow: msg.blueRow,
                redScore: msg.redPoints,
                yellowScore: msg.yellowPoints,
                greenScore: msg.greenPoints,
                blueScore: msg.bluePoints,
                penaltyScore: msg.penaltyScore
            });
        });
    }, []);

    const createGame = (username: string) => {
        setError(null);
        socket?.emit("create_room", { username });
    };

    const joinGame = (username: string, code: string) => {
        setError(null);
        socket?.emit("join_room", { code, username });
    };

    const leaveGame = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        setHasEnded(false);
        setGameCreatorId(null);
        setRoom(null);
        setGameState(INITIAL_GAME_STATE);

        socket?.emit("leave_game", {
            roomId: room?.roomId,
            token: localStorage.getItem("token")
        });
    };

    const sendMove = (colorValue: Color, number: number) => {
        setError(null);
        socket?.emit("move", {
            color: colorFromValue(colorValue),
            number,
            roomId: room?.roomId,
            token: localStorage.getItem("token")!
        });
    };

    const sendPenalty = (event: React.MouseEvent<HTMLElement>) => {
        setError(null);
        socket?.emit("penalty", {
            roomId: room?.roomId,
            removed: event.currentTarget.className.includes("clicked"),
            token: localStorage.getItem("token")
        });
    };

    const endGame = () => {
        socket?.emit("end_game", {
            roomId: room?.roomId,
            token: localStorage.getItem("token")
        });
    };

    const rematch = () => {
        socket?.emit("rematch", {
            roomId: room?.roomId,
            token: localStorage.getItem("token")
        });
    };

    return {
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
    };
};
