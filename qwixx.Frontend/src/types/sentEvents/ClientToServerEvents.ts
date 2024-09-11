import { CreateRoom } from "./CreateRoom";
import { EndGame } from "./EndGame";
import { JoinRoom } from "./JoinRoom";
import { LeaveGame } from "./LeaveGame";
import { Move } from "./Move";
import { Penalty } from "./Penalty";
import { Reconnect } from "./Reconnect";

export interface ClientToServerEvents {
  reconnect: (data: Reconnect) => void;
  move: (data: Move) => void;
  penalty: (data: Penalty) => void;
  join_room: (data: JoinRoom) => void;
  create_room: (data: CreateRoom) => void;
  end_game: (data: EndGame) => void;
  leave_game: (data: LeaveGame) => void;
}
