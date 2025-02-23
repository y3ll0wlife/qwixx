export interface JoinRoom {
  roomId: string;
  roomCode: string;
  token: string;
  userId: string;
  username: string;
  roomCreatorId: string;
}

export interface JoinRoomError {
  message: string;
}
