import { Cell } from "../Cell";
import { User } from "../User";

export interface RestoreBoard {
  creatorUserId: string;
  user: User;
  redRow: Cell[];
  redPoints: number;
  yellowRow: Cell[];
  yellowPoints: number;
  greenRow: Cell[];
  greenPoints: number;
  blueRow: Cell[];
  bluePoints: number;
  penaltyScore: number;
}
