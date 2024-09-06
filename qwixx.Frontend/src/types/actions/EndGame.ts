export interface EndGame {
  result: EndGameResult;
}

export interface EndGameResult {
  scoreboard: EndGameScoreboard[];
}

export interface EndGameScoreboard {
  blue_points: number;
  green_points: number;
  penalties: number;
  placement: number;
  red_points: number;
  total_points: number;
  username: string;
  yellow_points: number;
}
