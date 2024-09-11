export interface JoinRoom {
  roomId: string;
  roomCode: string;
  token: string;
  userId: string;
  roomCreatorId: string;
}

export interface JoinRoomError {
  message: string;
}
