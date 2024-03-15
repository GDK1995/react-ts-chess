import logo from '../../assets/black-bisjop.png'
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export enum FigureNames {
  FIGURE = 'Фигура',
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Королева',
  ROOK = 'Ладья',
  BISHOP = 'Слон'
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.logo = null;
    this.cell.figure = this;
    this.id = Math.random()
    this.name = FigureNames.FIGURE
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) {
      return false;
    }
    if (target.figure?.name === FigureNames.KING) {
      return false
    }
    return true;
  }

  moveFigure(target: Cell) {
  }
}