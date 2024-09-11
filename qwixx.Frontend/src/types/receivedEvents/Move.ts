import { Cell } from "../Cell";
import { User } from "../User";

export interface Move {
  color: string;
  user: User;
  gameRow: Cell[];
  points: number;
  updatedCell: Cell;
}
