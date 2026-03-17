import { memo } from 'react';
import type { FC, PropsWithChildren } from 'react';
import type { GridRowProps } from './interface';
import { Row } from './Row';
import { Col } from './Col';

export interface GridProps extends GridRowProps {}

const GridComponent: FC<PropsWithChildren<GridProps>> = (props) => {
  return <Row {...props} />;
};

type GridComponentType = FC<PropsWithChildren<GridProps>> & {
  Row: typeof Row;
  Col: typeof Col;
};

export const Grid = memo(GridComponent) as unknown as GridComponentType;

Grid.Row = Row;
Grid.Col = Col;

export default Grid;
