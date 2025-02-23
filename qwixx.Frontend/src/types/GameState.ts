import { Cell } from "./Cell";

export interface GameState {
  redRow: Cell[];
  yellowRow: Cell[];
  greenRow: Cell[];
  blueRow: Cell[];
  redScore: number;
  yellowScore: number;
  greenScore: number;
  blueScore: number;
  penaltyScore: number;
}
