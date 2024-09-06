export interface JoinRoom {
  room_id: string;
  room_code: string;
  token: string;
  user_id: string;
  room_creator_id: string;
}

export interface JoinRoomError {
  message: string;
}
