import { useEffect, useRef, useState } from 'react'
import './App.css'
import { io, Socket } from 'socket.io-client';
import { Notification } from '@mantine/core';

const PENALTY_ROW = ["X", "X", "X", "X"];

//! TODO CHANGE THIS
const ROOM_GUID = "98c4c056-c328-41bb-ba45-0e410ef81f2b";

enum Color {
  RED,
  YELLOW,
  GREEN,
  BLUE
}

const RED_YELLOW_ROW = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const GREEN_BLUE_ROW = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

interface Cell {
  number: number,
  disabled: boolean,
  clicked: boolean
}

function App() {
  const onceRef = useRef(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState(false);

  const [redRow, setRedRow] = useState<Cell[]>(RED_YELLOW_ROW.map<Cell>(number => { return { number, disabled: number == 12, clicked: false } }));
  const [yellowRow, setYellowRow] = useState<Cell[]>(RED_YELLOW_ROW.map<Cell>(number => { return { number, disabled: number == 12, clicked: false } }));
  const [greenRow, setGreenRow] = useState<Cell[]>(GREEN_BLUE_ROW.map<Cell>(number => { return { number, disabled: number == 2, clicked: false } }));
  const [blueRow, setBlueRow] = useState<Cell[]>(GREEN_BLUE_ROW.map<Cell>(number => { return { number, disabled: number == 2, clicked: false } }));

  const [redScore, setRedScore] = useState<number>(0);
  const [yellowScore, setYellowScore] = useState<number>(0);
  const [greenScore, setGreenScore] = useState<number>(0);
  const [blueScore, setBlueScore] = useState<number>(0);

  const [penaltyScore, setPenaltyScore] = useState<number>(0);
  const [lastMoveText, setLastMoveText] = useState<string | null>(null);

  useEffect(() => {
    if (onceRef.current) {
      return;
    }
    onceRef.current = true;

    const socket = io("ws://192.168.1.229:3000");
    setSocket(socket);

    socket.on("connect", () => {
      setConnected(true);

      socket.emit("join", ROOM_GUID);
    });

    socket.on("move", (msg: { color: string, socket_id: string, game_row: Cell[], points: number, updated_cell: Cell }) => {

      if (socket.id !== msg.socket_id) {
        setLastMoveText(`made by ${msg.socket_id} color: ${msg.color}, number: ${msg.updated_cell.number} (total points in row ${msg.points})`)
        return;
      }

      if (msg.color === "Red") {
        setRedRow(msg.game_row);
        setRedScore(msg.points);
      } else if (msg.color === "Yellow") {
        setYellowRow(msg.game_row);
        setYellowScore(msg.points);
      }
      else if (msg.color === "Green") {
        setGreenRow(msg.game_row);
        setGreenScore(msg.points);
      } else if (msg.color === "Blue") {
        setBlueRow(msg.game_row);
        setBlueScore(msg.points);
      }
    });

    socket.on("penalty", (msg: { socket_id: string, points: number }) => {
      if (socket.id !== msg.socket_id) {
        setLastMoveText(`a penalty by ${msg.socket_id} (has lost ${msg.points} points in penaltities)`)
        return;
      }
      setPenaltyScore(msg.points);
    });

  }, [lastMoveText]);

  const colorFromValue = (colorValue: Color): string => {
    let color;
    switch (colorValue) {
      case Color.RED:
        color = "Red"
        break;
      case Color.YELLOW:
        color = "Yellow"
        break;
      case Color.GREEN:
        color = "Green"
        break;
      case Color.BLUE:
        color = "Blue"
        break;
    }

    return color;
  }

  const sendMove = (colorValue: Color, number: number) => {
    socket?.emit("move", {
      color: colorFromValue(colorValue),
      number,
      room: ROOM_GUID,
    });
  };

  const sendPenalty = (event: React.MouseEvent<HTMLElement>) => {
    socket?.emit("penalty", {
      room: ROOM_GUID,
      removed: event.currentTarget.className.includes("clicked")
    });
  };


  const getClassName = (colorValue: Color, row: Cell): string => {
    let className = `${colorFromValue(colorValue).toLowerCase()}-btn`;

    if (row.clicked && row.disabled) {
      className += "-clicked-disable"
    }
    else if (row.clicked) {
      className += "-clicked"
    }
    else if (row.disabled) {
      className += "-disable"
    }

    return className
  }

  if (!connected) {
    return <>Loading...</>
  }

  return (
    <>
      {lastMoveText != null ? <Notification radius={'sm'} withCloseButton={false}>
        Last move was {lastMoveText}
      </Notification> : null}
      <h3>
        {socket?.id}
      </h3>
      <div>
        {redRow.map((row, i) => {
          const showText = row.number == 12 ? "12 + Lock" : row.number;
          const className = getClassName(Color.RED, row);
          return (<button disabled={className.includes("disable")} className={className} onClick={() => sendMove(Color.RED, row.number)} key={i}>{showText}</button>)
        })}
      </div >
      <br />
      <div>
        {yellowRow.map((row, i) => {
          const showText = row.number == 12 ? "12 + Lock" : row.number;
          const className = getClassName(Color.YELLOW, row);
          return (<button disabled={className.includes("disable")} className={className} onClick={() => sendMove(Color.YELLOW, row.number)} key={i}>{showText}</button>)
        })}
      </div>
      <br />
      <div>
        {greenRow.map((row, i) => {
          const showText = row.number == 2 ? "2 + Lock" : row.number;
          const className = getClassName(Color.GREEN, row);
          return (<button disabled={className.includes("disable")} className={className} onClick={() => sendMove(Color.GREEN, row.number)} key={i}>{showText}</button>)
        })}
      </div>
      <br />
      <div>
        {blueRow.map((row, i) => {
          const showText = row.number == 2 ? "2 + Lock" : row.number;
          const className = getClassName(Color.BLUE, row);
          return (<button disabled={className.includes("disable")} className={className} onClick={() => sendMove(Color.BLUE, row.number)} key={i}>{showText}</button>)
        })}
      </div>
      <br />
      <div>
        {PENALTY_ROW.map((penalty, i) => {
          const className = (i + 1) < (penaltyScore / 4) ? 'penalty-btn-clicked' : 'penalty-btn'

          return (<button onClick={sendPenalty} className={className} key={i}>{penalty}</button>)
        })}
      </div>
      <div>
        <h3>
          <span className='red-score'>{redScore} </span> +
          <span className='yellow-score'> {yellowScore}</span> +
          <span className='green-score'> {greenScore}</span> +
          <span className='blue-score'> {blueScore}</span> -
          <span className='penalty-score'> {penaltyScore}</span> = {redScore + yellowScore + greenScore + blueScore - penaltyScore}</h3>
      </div>
    </>
  )
}

export default App
