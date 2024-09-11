import { CreateRoom } from "./CreateRoom";
import { EndGame } from "./EndGame";
import { JoinRoom, JoinRoomError } from "./JoinRoom";
import { Move } from "./Move";
import { Penalty } from "./Penalty";
import { RestoreBoard } from "./RestoreBoard";

export interface ServerToClientEvents {
  connect: () => void;
  end_game: (msg: EndGame) => void;
  move: (msg: Move) => void;
  penalty: (msg: Penalty) => void;
  create_room: (msg: CreateRoom) => void;
  join_room: (msg: JoinRoom) => void;
  clear_token: () => void;
  join_room_error: (msg: JoinRoomError) => void;
  restore_board: (msg: RestoreBoard) => void;
}
