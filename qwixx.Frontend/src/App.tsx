import { useEffect, useRef, useState } from "react"
import "./App.css"
import { io, Socket } from "socket.io-client";
import { Notification, TableData } from "@mantine/core";
import { Button, TextInput, Grid, Table } from "@mantine/core";
import { useField } from "@mantine/form";

const PENALTY_ROW = ["X", "X", "X", "X"];

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

interface Room {
  room_id: string,
  room_code: string
  token: string,
  user_id: string
  room_creator_id: string,
}

interface User {
  id: string,
  username: string
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

  const [error, setError] = useState<string | null>(null);
  const [gameCreatorId, setGameCreatorId] = useState<string | null>(null);

  const username = useField({
    initialValue: "",
    validate: (value) => (value.trim().length < 2 ? "Username is too short" : null),
  });
  const gameCode = useField({
    initialValue: "",
    validate: (value) => (value.trim().length != 5 ? "Code is not 5 characters long" : null),
  });
  const [room, setRoom] = useState<Room | null>(null);

  const [hasEnded, setHasEnded] = useState<boolean>(false);
  const [endedTableData, setEndedTableData] = useState<TableData | null>(null);
  useEffect(() => {
    if (onceRef.current) {
      return;
    }
    onceRef.current = true;

    const socket = io(import.meta.env.VITE_GATEWAY_URL);
    setSocket(socket);

    socket.onAnyOutgoing((eventName, ...args) => {
      console.log(`%c[${eventName}]%c ~> ${JSON.stringify(args)}`, "color:#25c2a0;font-weight:bold", "color:white;font-weight:normal")

    });
    socket.onAny((eventName, ...args) => {
      console.log(`%c[${eventName}]%c <~ ${JSON.stringify(args)}`, "color:#78dce8;font-weight:bold", "color:white;font-weight:normal")
    });

    socket.on("connect", () => {
      setConnected(true);
      const token = localStorage.getItem("token");
      if (token) {
        socket.emit("reconnect", {
          token
        })
      }
    });

    socket.on("end_game", (msg: {
      result: {
        scoreboard: {
          blue_points: number
          green_points: number
          penalties: number
          placement: number
          red_points: number
          total_points: number
          username: string
          yellow_points: number
        }[]
      }
    }) => {
      setHasEnded(true);

      const body = msg.result.scoreboard.map((board) => {
        let placementText = board.placement.toString();
        if (board.placement === 1) placementText = "🥇"
        else if (board.placement === 2) placementText = "🥈"
        else if (board.placement === 3) placementText = "🥉";

        return [placementText, board.username, board.total_points, board.red_points, board.yellow_points, board.green_points, board.blue_points, board.penalties]
      })


      setEndedTableData({
        head: ["Placement", "Username", "Points", "Red", "Yellow", "Green", "Blue", "Penalties"],
        body
      });
    })


    socket.on("move", (msg: { color: string, user: User, game_row: Cell[], points: number, updated_cell: Cell }) => {
      if (localStorage.getItem("userId") !== msg.user.id) {
        setLastMoveText(`Last move was made by ${msg.user.username} color: ${msg.color}, number: ${msg.updated_cell.number} (total points in row ${msg.points})`)
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

    socket.on("penalty", (msg: { user: User, points: number }) => {
      if (localStorage.getItem("userId") !== msg.user.id) {
        setLastMoveText(`Last move was a penalty by ${msg.user.username} (has lost ${msg.points} points in penaltities)`)
        return;
      }
      setPenaltyScore(msg.points);
    });

    socket.on("create_room", (msg: Room) => {
      setRoom(msg);
      localStorage.setItem("token", msg.token);
      localStorage.setItem("userId", msg.user_id);
      setGameCreatorId(msg.room_creator_id);
    })

    socket.on("join_room", (msg: Room) => {
      setRoom(msg);
      localStorage.setItem("token", msg.token);
      localStorage.setItem("userId", msg.user_id);
      setGameCreatorId(msg.room_creator_id);
    })



    socket.on("clear_token", () => {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");

      setGameCreatorId(null);
      setRoom(null);

      setRedRow(RED_YELLOW_ROW.map<Cell>(number => { return { number, disabled: number == 12, clicked: false } }));
      setYellowRow(RED_YELLOW_ROW.map<Cell>(number => { return { number, disabled: number == 12, clicked: false } }));
      setGreenRow(GREEN_BLUE_ROW.map<Cell>(number => { return { number, disabled: number == 2, clicked: false } }));
      setBlueRow(GREEN_BLUE_ROW.map<Cell>(number => { return { number, disabled: number == 2, clicked: false } }));

      setRedScore(0);
      setYellowScore(0);
      setGreenScore(0);
      setBlueScore(0);

      setPenaltyScore(0);
      setLastMoveText(null);
    })

    socket.on("join_room_error", ({ message }: { message: string }) => {
      setError(message);
    })

    socket.on("restore_board", (msg: { creator_user_id: string, user: User, red_row: Cell[], red_points: number, yellow_row: Cell[], yellow_points: number, green_row: Cell[], green_points: number, blue_row: Cell[], blue_points: number, penalty_score: number }) => {
      setGameCreatorId(msg.creator_user_id);
      if (localStorage.getItem("userId") !== msg.user.id) {
        setLastMoveText(`${msg.user.username} has reconnected`)
        return;
      }
      setPenaltyScore(msg.penalty_score);

      setRedRow(msg.red_row);
      setRedScore(msg.red_points);

      setYellowRow(msg.yellow_row);
      setYellowScore(msg.yellow_points);

      setGreenRow(msg.green_row);
      setGreenScore(msg.green_points);

      setBlueRow(msg.blue_row);
      setBlueScore(msg.blue_points);
    })

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
    setError(null);

    socket?.emit("move", {
      color: colorFromValue(colorValue),
      number,
      room: room?.room_id,
      token: localStorage.getItem("token")
    });
  };

  const sendPenalty = (event: React.MouseEvent<HTMLElement>) => {
    setError(null);

    socket?.emit("penalty", {
      room: room?.room_id,
      removed: event.currentTarget.className.includes("clicked"),
      token: localStorage.getItem("token")
    });
  };

  const joinGame = async () => {
    setError(null);

    const gameCodeValidation = await gameCode.validate();
    const userNameValidation = await username.validate();
    if (gameCodeValidation !== null || userNameValidation !== null) {
      return;
    }

    socket?.emit("join_room", {
      code: gameCode.getValue(),
      username: username.getValue()
    });
  }

  const createGame = async () => {
    setError(null);

    const userNameValidation = await username.validate();
    if (userNameValidation !== null) {
      return;
    }

    socket?.emit("create_room", {
      username: username.getValue()
    });
  }

  const endGame = async () => {
    socket?.emit("end_game", {
      room: room?.room_id,
      token: localStorage.getItem("token")
    });
  }

  const leaveGame = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    setHasEnded(false);

    setGameCreatorId(null);
    setRoom(null);

    setRedRow(RED_YELLOW_ROW.map<Cell>(number => { return { number, disabled: number == 12, clicked: false } }));
    setYellowRow(RED_YELLOW_ROW.map<Cell>(number => { return { number, disabled: number == 12, clicked: false } }));
    setGreenRow(GREEN_BLUE_ROW.map<Cell>(number => { return { number, disabled: number == 2, clicked: false } }));
    setBlueRow(GREEN_BLUE_ROW.map<Cell>(number => { return { number, disabled: number == 2, clicked: false } }));

    setRedScore(0);
    setYellowScore(0);
    setGreenScore(0);
    setBlueScore(0);

    setPenaltyScore(0);
    setLastMoveText(null);

    socket?.emit("leave_game", {
      room: room?.room_id,
      token: localStorage.getItem("token")
    });
  }


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

  if (hasEnded && endedTableData) {
    return (
      <>
        <Table data={endedTableData} mb={"xl"} />
        <button onClick={leaveGame} style={{ border: "0px", margin: "10px" }}>Leave game</button>
      </>
    )
  }

  if (room === null) {
    return <>
      {error !== null ?
        <Notification radius={"sm"} withCloseButton={false}>
          {error}
        </Notification> :
        null}
      <p style={{ textAlign: "left" }}>Username</p>
      <TextInput {...username.getInputProps()} placeholder="Enter your username" mb="sm" />
      <Grid>
        <Grid.Col span={6}>
          <h3>Create a game?</h3>
          <div>
            <Button onClick={() => createGame()}>Create game</Button>
          </div >
        </Grid.Col>
        <Grid.Col span={6}>
          <h3>Or join one?</h3>
          <div>
            <TextInput {...gameCode.getInputProps()} placeholder="Enter the game code" mb="sm" />
            <Button onClick={() => joinGame()}>Join game</Button>
          </div>
        </Grid.Col>
      </Grid>
    </>
  }

  return (
    <>
      {lastMoveText !== null ?
        <Notification radius={"sm"} withCloseButton={false}>
          {lastMoveText}
        </Notification> :
        null}
      <h3>
        Code: {room.room_code}
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
          const className = (i + 1) < (penaltyScore / 4) ? "penalty-btn-clicked" : "penalty-btn"

          return (<button onClick={sendPenalty} className={className} key={i}>{penalty}</button>)
        })}
      </div>
      <div>
        <h3>
          <span className="red-score">{redScore} </span> +
          <span className="yellow-score"> {yellowScore}</span> +
          <span className="green-score"> {greenScore}</span> +
          <span className="blue-score"> {blueScore}</span> -
          <span className="penalty-score"> {penaltyScore}</span> = {redScore + yellowScore + greenScore + blueScore - penaltyScore}</h3>
      </div>
      {localStorage.getItem("userId") === gameCreatorId ? <button onClick={endGame} style={{ border: "0px" }}>End game</button> : null
      }
      <button onClick={leaveGame} style={{ border: "0px", margin: "10px" }}>Leave game</button>

    </>
  )
}

export default App
