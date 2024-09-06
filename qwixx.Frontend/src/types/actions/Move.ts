import { Cell } from "../Cell";
import { User } from "../User";

export interface Move {
  color: string;
  user: User;
  game_row: Cell[];
  points: number;
  updated_cell: Cell;
}
