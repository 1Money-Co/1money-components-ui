import { memo } from 'react';
import type { PropsWithChildren } from 'react';
import type { GridRowProps } from './interface';
import { Row } from './Row';
import { Col } from './Col';

export interface GridProps extends GridRowProps {}

const GridInner = memo<PropsWithChildren<GridProps>>(props => <Row {...props} />);

GridInner.displayName = 'Grid';

export const Grid = Object.assign(GridInner, { Row, Col });

export default Grid;
