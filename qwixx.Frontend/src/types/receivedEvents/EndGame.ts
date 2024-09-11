export interface EndGame {
  result: EndGameResult;
}

export interface EndGameResult {
  scoreboard: EndGameScoreboard[];
}

export interface EndGameScoreboard {
  username: string;
  bluePoints: number;
  greenPoints: number;
  penalties: number;
  placement: number;
  redPoints: number;
  totalPoints: number;
  yellowPoints: number;
}
