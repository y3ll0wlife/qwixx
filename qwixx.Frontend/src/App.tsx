import { useEffect, useRef, useState } from 'react'
import './App.css'
import { io, Socket } from 'socket.io-client';


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

interface GameBoard {
  red: GameRow[],
  yellow: GameRow[],
  green: GameRow[],
  blue: GameRow[]
}

interface GameRow {
  number: number,
  disabled: boolean,
  clicked: boolean
}

function App() {
  const onceRef = useRef(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState(false);


  const [redRow, setRedRow] = useState<GameRow[]>(RED_YELLOW_ROW.map<GameRow>(number => { return { number, disabled: number == 12, clicked: false } }));
  const [yellowRow, setYellowRow] = useState<GameRow[]>(RED_YELLOW_ROW.map<GameRow>(number => { return { number, disabled: number == 12, clicked: false } }));
  const [greenRow, setGreenRow] = useState<GameRow[]>(GREEN_BLUE_ROW.map<GameRow>(number => { return { number, disabled: number == 2, clicked: false } }));
  const [blueRow, setBlueRow] = useState<GameRow[]>(GREEN_BLUE_ROW.map<GameRow>(number => { return { number, disabled: number == 2, clicked: false } }));

  useEffect(() => {
    if (onceRef.current) {
      return;
    }

    onceRef.current = true;

    const socket = io("ws://localhost:3000");
    setSocket(socket);

    socket.on("connect", () => {
      console.log("Connected to socket server");
      setConnected(true);

      socket.emit("join", ROOM_GUID);
    });

    socket.on("move", (msg: { color: string, socket_id: string, game_row: GameRow[] }) => {
      console.log("Message received", msg);

      if (socket.id !== msg.socket_id) {
        return;
      }

      if (msg.color === "Red") {
        setRedRow(msg.game_row);
      } else if (msg.color === "Yellow") {
        setYellowRow(msg.game_row);
      }
      else if (msg.color === "Green") {
        setGreenRow(msg.game_row);
      } else if (msg.color === "Blue") {
        setBlueRow(msg.game_row);
      }

    });

  }, []);

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

  const getClassName = (colorValue: Color, row: GameRow): string => {
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
      <h3>
        {socket?.id}
      </h3>
      <div>
        {redRow.map((row, i) => {
          const showText = row.number == 12 ? "12 + Lock" : row.number;
          const className = getClassName(Color.RED, row);
          return (<button className={className} onClick={() => sendMove(Color.RED, row.number)} key={i}>{showText}</button>)
        })}
      </div >
      <br />
      <div>
        {yellowRow.map((row, i) => {
          const showText = row.number == 12 ? "12 + Lock" : row.number;
          const className = getClassName(Color.YELLOW, row);
          return (<button className={className} onClick={() => sendMove(Color.YELLOW, row.number)} key={i}>{showText}</button>)
        })}
      </div>
      <br />
      <div>
        {greenRow.map((row, i) => {
          const showText = row.number == 2 ? "2 + Lock" : row.number;
          const className = getClassName(Color.GREEN, row);
          return (<button className={className} onClick={() => sendMove(Color.GREEN, row.number)} key={i}>{showText}</button>)
        })}
      </div>
      <br />
      <div>
        {blueRow.map((row, i) => {
          const showText = row.number == 2 ? "2 + Lock" : row.number;
          const className = getClassName(Color.BLUE, row);
          return (<button className={className} onClick={() => sendMove(Color.BLUE, row.number)} key={i}>{showText}</button>)
        })}
      </div>
      <br />
      <br />
      <div>
        {PENALTY_ROW.map((penalty, i) => {
          return (<button className='penalty-btn' key={i}>{penalty}</button>)
        })}
      </div>
    </>
  )
}

export default App
