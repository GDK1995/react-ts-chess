import { FC } from 'react';
import { Cell } from '../modals/Cell';

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellCompanent: FC<CellProps> = ({cell, selected, click}) => {
  return (
    <div
      className={['cell', cell.color, selected ? 'selected' : '', cell.available && cell.figure ? 'green' : ''].join(' ')}
      onClick={() => click(cell)}>
      {cell.available && !cell.figure && <div  className='available'/>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt=''/>}
    </div>
  );
};

export default CellCompanent;
