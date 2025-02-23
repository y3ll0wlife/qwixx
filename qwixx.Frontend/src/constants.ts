import { Cell } from "./types/Cell";
import { GameState } from "./types/GameState";

export const PENALTY_ROW = ["X", "X", "X", "X"];
export const RED_YELLOW_ROW = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const GREEN_BLUE_ROW = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
export const AUTOCLOSE_NOTIFICATION = 3000;

export const INITIAL_GAME_STATE: GameState = {
  redRow: RED_YELLOW_ROW.map<Cell>((number) => ({
    number,
    disabled: number === 12,
    clicked: false,
  })),
  yellowRow: RED_YELLOW_ROW.map<Cell>((number) => ({
    number,
    disabled: number === 12,
    clicked: false,
  })),
  greenRow: GREEN_BLUE_ROW.map<Cell>((number) => ({
    number,
    disabled: number === 2,
    clicked: false,
  })),
  blueRow: GREEN_BLUE_ROW.map<Cell>((number) => ({
    number,
    disabled: number === 2,
    clicked: false,
  })),
  redScore: 0,
  yellowScore: 0,
  greenScore: 0,
  blueScore: 0,
  penaltyScore: 0,
};
