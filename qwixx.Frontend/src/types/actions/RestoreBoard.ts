import { Cell } from "../Cell";
import { User } from "../User";

export interface RestoreBoard {
  creator_user_id: string;
  user: User;
  red_row: Cell[];
  red_points: number;
  yellow_row: Cell[];
  yellow_points: number;
  green_row: Cell[];
  green_points: number;
  blue_row: Cell[];
  blue_points: number;
  penalty_score: number;
}
